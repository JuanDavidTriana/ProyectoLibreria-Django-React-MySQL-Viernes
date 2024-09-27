from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import AutorViewSet, LibroViewSet

router = DefaultRouter()
router.register(f'autores', AutorViewSet)
router.register(f'libros', LibroViewSet)

urlpatterns = [
    path('', include(router.urls)),
]