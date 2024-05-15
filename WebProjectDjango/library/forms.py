from django import forms
from .models import Book

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = [
            'name',
            'author',
            'category',
            'bookImage',
            'description'
        ]
        widgets = {
            'name': forms.TextInput(attrs={'placeholder' : 'Title'}),
            'author': forms.TextInput(attrs={'placeholder':'Author'}),
            'category': forms.Select(attrs={'class':'form-control'}),
            'bookImage': forms.FileInput(attrs={'style':'padding-left: 140px'}),
            'description': forms.Textarea(attrs={'placeholder':'description'})
        }
