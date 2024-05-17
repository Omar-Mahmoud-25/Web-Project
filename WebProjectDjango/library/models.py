from django.db import models

# Create your models here.
# class Author(models.Model):
#     name = models.CharField(max_length=100)
#     def __str__(self):
#         return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Book(models.Model):
    name = models.CharField(max_length=50)
    # author = models.ForeignKey(Author, on_delete=models.PROTECT)
    author_name = models.CharField(max_length=100, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    bookImage = models.ImageField(upload_to='images', null=True, blank=True)
    description = models.CharField(max_length=500)
    available = models.BooleanField(default=True)
    def __str__(self):
        return self.name
    
class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=16)
    email = models.EmailField(max_length=30)
    isAdmin = models.BooleanField(default=False)
    def __str__(self):
        return self.username
