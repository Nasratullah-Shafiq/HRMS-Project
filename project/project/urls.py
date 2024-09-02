from django.contrib import admin
from django.urls import path, re_path
from app import views

urlpatterns = [
    path('student/', views.studentApi),  # This handles requests to "student/"
    re_path(r'^student/([0-9]+)$', views.studentApi),  # This handles requests to "student/<id>"
    path('admin/', admin.site.urls),  # Admin route

    path('course/', views.courseApi),  # This handles requests to "student/"
    re_path(r'^course/([0-9]+)$', views.courseApi),  # This handles requests to "student/<id>"
]

# urlpatterns = [
#     path('course/<int:id>/', views.courseApi, name='delete_course'),
#     # Other URL patterns
# ]


# from django.contrib import admin
# from django.urls import path
# from django.conf.urls import url
# from app import views

# urlpatterns = [
#     path(r'^student$', views.studentApi),
#     path(r'^student$',views.studentApi),
#     path(r'^student/([0-9]+)$',views.studentApi),
#     path('admin/', admin.site.urls),
# ]