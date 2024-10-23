from rest_framework import viewsets
from .models import Libro, Autor
from .serializers import AutorSerializer, LibroSerializer

class AutorViewSet(viewsets.ModelViewSet):
    """
    ViewSet que permite crear, leer, actualizar y eliminar Autores
    """
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer


class LibroViewSet(viewsets.ModelViewSet):
    """
    ViewSet que permite crear, leer, actualizar y eliminar Libros
    """
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
