from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("add", views.addBook, name="add"),
    path("available", views.available, name="available"),
    path("login", views.login, name="login"),
    path("signup", views.signup, name="signup"),
    path("validate-username/",
        csrf_exempt(views.usernameValidation), 
        name="usernameValidation"),
    path('paginated_books/', views.paginated_books, name='paginated_books'),
    path('book/<int:book_id>/', views.book_details, name='book_details'),
]
