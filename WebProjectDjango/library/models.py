from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Book(models.Model):
    name = models.CharField(max_length=50)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    bookImage = models.ImageField(upload_to='images', null=True, blank=True)
    description = models.CharField(max_length=500)
    available = models.BooleanField(default=True)
    def __str__(self):
        return self.name
