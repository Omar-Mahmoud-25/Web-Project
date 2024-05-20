from django import forms
from .models import *
from django.core.exceptions import ValidationError
import re


class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ["name", "author_name", "category", "bookImage", "description"]
        widgets = {
            "name": forms.TextInput(attrs={"placeholder": "Title"}),
            "author_name": forms.TextInput(attrs={"placeholder": "Author"}),
            "category": forms.Select(attrs={"class": "form-control"}),
            "bookImage": forms.FileInput(attrs={"style": "padding-left: 140px"}),
            "description": forms.Textarea(attrs={"placeholder": "description"}),
        }


class LoginForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["username", "password"]
        widgets = {
            "username": forms.TextInput(attrs={"placeholder": "UserName"}),
            "password": forms.PasswordInput(attrs={"placeholder": "Password"}),
        }


class signupForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["username", "email", "password", "isAdmin"]
        widgets = {
            "username": forms.TextInput(attrs={"placeholder": "UserName"}),
            "password": forms.PasswordInput(attrs={"placeholder": "Password"}),
            "email": forms.TextInput(attrs={"placeholder": "Email"}),
            "isAdmin": forms.CheckboxInput(),
        }


# class BorrowForm(forms.ModelForm):
#     class Meta:
#         model = Book