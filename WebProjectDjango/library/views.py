# trunk-ignore(ruff/F401)
from django.shortcuts import get_object_or_404, redirect, render
from .models import *
from .forms import *
from django.http import JsonResponse
import json
from django.core.paginator import Paginator
from .models import Book




BookDictionary = {
    'books': Book.objects.all(),
    'suggestions': Book.objects.all()[:5],
    'form': BookForm()
}

def index(request):
    return render(request, "index.html", BookDictionary)


def addBook(request):
    if request.method == 'POST':
        addedBook = BookForm(request.POST, request.FILES)
        if addedBook.is_valid():
            addedBook.save()
            # print(addedBook)
            # Book.objects.create(name=addedBook.name, author=addedBook.author, category=addedBook.category,
            #                     bookImage=addedBook.bookImage, description=addedBook.description)

        else:
            print(addedBook.errors)

    return render(request, "AddBook.html", BookDictionary)


def AdminAvailable(request):
    return render(request, "categories.html")

def UserAvailable(request):
    return render(request, "Useravailable.html")


def login(request):
    return render(request, "login.html")


def signup(request):
    return render(request, "signUp.html")

def usernameValidation(request):
    username = request.POST.get('username')
    exists = User.objects.filter(username==username).exists()
    if (exists):
        return JsonResponse({'exists':True})
    else:
        return JsonResponse({'exists':False})
    
def paginated_books(request):
    page_number = request.GET.get('page', 1)
    books = Book.objects.all()
    paginator = Paginator(books, 5)  # 5 books per page
    page_obj = paginator.get_page(page_number)
    
    books_list = [
        {
            'id': book.id,
            'name': book.name,
            'bookImage': book.bookImage.url if book.bookImage else ''
        }
        for book in page_obj.object_list
    ]
    return JsonResponse({
        'books': books_list,
        'has_next': page_obj.has_next(),
        'has_previous': page_obj.has_previous(),
    })

def book_details(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    return render(request, 'bookDetails.html', {'book': book})


from django.core.paginator import Paginator
from django.http import JsonResponse
from .models import Book

def get_books_by_category(request):
    category_name = request.GET.get('category')
    books = Book.objects.filter(category__name__iexact=category_name, available=True)
    
    books_data = [
        {
            'id': book.id,
            'name': book.name,
            'bookImage': book.bookImage.url if book.bookImage else '',
            'author': book.author_name,
            'category': book.category.name
        } for book in books
    ]
    
    return JsonResponse({'books': books_data})



def cat_books(request):
    category_name = request.GET.get('category')
    page_number = int(request.GET.get('page'))
    books = Book.objects.filter(category__name__iexact=category_name, available=True)
    
    paginator = Paginator(books, 5)  # Adjust the number of books per page if needed
    page_obj = paginator.get_page(page_number)
    
    books_data = [
        {
            'id': book.id,
            'name': book.name,
            'bookImage': book.bookImage.url if book.bookImage else ''
        } for book in page_obj.object_list
    ]
    
    return JsonResponse({
        'books': books_data,
        'has_next': page_obj.has_next(),
        'has_previous': page_obj.has_previous(),
    })
