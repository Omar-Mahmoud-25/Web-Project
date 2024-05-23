# trunk-ignore(ruff/F401)
from django.shortcuts import get_object_or_404, redirect, render
from .models import *
from .forms import *
from django.http import JsonResponse
import json
from django.core.paginator import Paginator
from django.db.models import Q
from django.contrib.auth import authenticate, login

BookDictionary = {
    "books": Book.objects.all(),
    "suggestions": Book.objects.all()[:5],
    "form": BookForm(),
}

def index(request):
    return render(request, "index.html", {"books": Book.objects.all()})


def addBook(request):
    if request.method == "POST":
        addedBook = BookForm(request.POST, request.FILES)
        if addedBook.is_valid():
            addedBook.save()
        else:
            print(addedBook.errors)

    return render(request, "AddBook.html", BookDictionary)

def editBook(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    if request.method == "POST":
        form = BookForm(request.POST, request.FILES, instance=book)
        if form.is_valid():
            form.save()
            return redirect("index")
    else:
        form = BookForm(instance=book)
    return render(request, "edit.html", {"book": book, "form": form})

def delete(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    book.delete()
    return redirect("index")

def borrow(request, book_id, username):
    book = get_object_or_404(Book, id=book_id)
    book.available = False
    book.owner = User.objects.filter(username=username)[0]
    book.save()
    return redirect("index")

def returnBook(request, book_id, username):
    book = get_object_or_404(Book, id=book_id)
    book.available = True
    book.owner = None
    book.save()
    return redirect("borrowedBooks")

def AdminAvailable(request):
    return render(request, "Adminavailable.html")

def UserAvailable(request):
    return render(request, "Useravailable.html")

def login_view(request):
    return render(request, "login.html", {"form": LoginForm()})


def loginValidation(request):
    Username = request.GET.get("username")
    Password = request.GET.get("password")
    user = User.objects.filter(username=Username, password=Password)
    if user:
        return JsonResponse({"success": True, "isAdmin": user[0].isAdmin, "username":user[0].username})
    else:
        return JsonResponse({"success": False})


def signup(request):
    if request.method == "POST":
        userDetails = signupForm(request.POST)
        if userDetails.is_valid():
            userDetails.save()
            return redirect("login")
        else:
            print(userDetails.errors)

    return render(request, "signUp.html", {"Form": signupForm()})

def usernameValidation(request):
    username = request.GET.get("username")
    exists = User.objects.filter(username=username).exists()
    return JsonResponse({"exists": exists})

def emailValidation(request):
    email = request.GET.get("email")
    exists = User.objects.filter(email=email).exists()
    return JsonResponse({"exists": exists})

def paginated_books(request):
    page_number = request.GET.get("page", 1)
    books = Book.objects.all()
    paginator = Paginator(books, 5)  # 5 books per page
    page_obj = paginator.get_page(page_number)

    books_list = [
        {
            "id": book.id,
            "name": book.name,
            "bookImage": book.bookImage.url if book.bookImage else "",
        }
        for book in page_obj.object_list
    ]
    return JsonResponse(
        {
            "books": books_list,
            "has_next": page_obj.has_next(),
            "has_previous": page_obj.has_previous(),
        }
    )


def book_details(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    return render(request, "bookDetails.html", {"book": book})

def borrowedBooks(request):
    return render(request, "borrowed.html")

def search(request):
    searchTxt = request.GET.get("searchTxt")
    if searchTxt:
        books = Book.objects.filter(
            Q(name__icontains=searchTxt)
            | Q(category__name__icontains=searchTxt)
            | Q(author_name__icontains=searchTxt)
        )
        print(books)
        resultBooks = [{"name": book.name, "id": book.id} for book in books]
        return JsonResponse({"results": resultBooks})
    else:
        return JsonResponse({"results": []})


def get_books_by_category(request):
    category_name = request.GET.get("category")
    books = Book.objects.filter(category__name__iexact=category_name)
    books_data = [
        {
            "id": book.id,
            "name": book.name,
            "bookImage": book.bookImage.url if book.bookImage else "",
            "author": book.author_name,
            "category": book.category.name,
        }
        for book in books
    ]
    return JsonResponse({"books": books_data})


def cat_books(request):
    category_name = request.GET.get("category")
    page_number = int(request.GET.get("page"))
    books = Book.objects.filter(category__name__iexact=category_name, available=True)

    paginator = Paginator(books, 5)  # Adjust the number of books per page if needed
    page_obj = paginator.get_page(page_number)

    books_data = [
        {
            "id": book.id,
            "name": book.name,
            "bookImage": book.bookImage.url if book.bookImage else "",
        }
        for book in page_obj.object_list
    ]

    return JsonResponse(
        {
            "books": books_data,
            "has_next": page_obj.has_next(),
            "has_previous": page_obj.has_previous(),
        }
    )


def cat_borrowed_books(request, username):
    category_name = request.GET.get("category")
    page_number = int(request.GET.get("page"))
    books = Book.objects.filter(
        category__name__iexact=category_name,
        available=False,
        owner__username=username,
    )
    paginator = Paginator(books, 5)  # Adjust the number of books per page if needed
    page_obj = paginator.get_page(page_number)

    books_data = [
        {
            "id": book.id,
            "name": book.name,
            "bookImage": book.bookImage.url if book.bookImage else "",
        }
        for book in page_obj.object_list
    ]

    return JsonResponse(
        {
            "books": books_data,
            "has_next": page_obj.has_next(),
            "has_previous": page_obj.has_previous(),
        }
    )