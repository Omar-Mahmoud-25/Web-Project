from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("add", views.addBook, name="add"),
    path("available", views.AdminAvailable, name="available"),
    path("Uavailable", views.UserAvailable, name="Uavailable"),

    path("login", views.login, name="login"),
    path("signup", views.signup, name="signup"),
    path("validate-username/",
        csrf_exempt(views.usernameValidation), 
        name="usernameValidation"),
    path('paginated_books/', views.paginated_books, name='paginated_books'),
    path('book/<int:book_id>/', views.book_details, name='book_details'),
    path('get-books-by-category/', views.get_books_by_category, name='get_books_by_category'),
    path('cat_books/', views.cat_books, name='cat_books'),

    

]
