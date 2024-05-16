# trunk-ignore(ruff/F401)
from django.shortcuts import get_object_or_404, redirect, render
from .models import *
from .forms import *

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


def available(request):
    return render(request, "categories.html")


def login(request):
    return render(request, "login.html")


def signup(request):
    return render(request, "signUp.html")
