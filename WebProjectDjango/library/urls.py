from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("add", views.addBook, name="add"),
    path("available", views.available, name="available"),
    path("login", views.login, name="login"),
    path("signup", views.signup, name="signup"),
]
