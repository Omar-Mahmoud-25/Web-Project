from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("add", views.addBook, name="add"),
    path("Aavailable", views.AdminAvailable, name="Aavailable"),
    path("Uavailable", views.UserAvailable, name="Uavailable"),

    path("login", views.login_view, name="login"),
    path('loginValidation',
        csrf_exempt(views.loginValidation),
        name='loginValidation'),
    path("signup", views.signup, name="signup"),
    path("Validate-username/",
        csrf_exempt(views.usernameValidation), 
        name="usernameValidation"),
    path("search",views.search,name="search"),
    path("Validate-email/",
        csrf_exempt(views.emailValidation), 
        name="emailValidation"),
    path('paginated_books/', views.paginated_books, name='paginated_books'),
    path('get-books-by-category/', views.get_books_by_category, name='get_books_by_category'),
    path('cat_books/', views.cat_books, name='cat_books'),
    path('cat_borrowed_books/<str:username>/', views.cat_borrowed_books, name='cat_borrowed_books'),
    path('borrowed',views.borrowedBooks,name='borrowedBooks'),
    path('book/<int:book_id>/', views.book_details, name='book_details'),
    path('edit/<int:book_id>/', views.editBook, name='edit'),
    path('delete/<int:book_id>/', views.delete, name='delete'),
    path('borrow/<int:book_id>/<str:username>', views.borrow, name='borrow'),
    path('return/<int:book_id>/<str:username>', views.returnBook, name='return'),
]
