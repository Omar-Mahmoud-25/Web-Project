# trunk-ignore(ruff/F401)
from django.shortcuts import get_object_or_404, redirect, render


def index(request):
    return render(request, "index.html")


def addBook(request):
    return render(request, "AddBook.html")


def available(request):
    return render(request, "categories.html")


def login(request):
    return render(request, "login.html")


def signup(request):
    return render(request, "signUp.html")
