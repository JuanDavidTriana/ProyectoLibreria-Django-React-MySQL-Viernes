from django.db import models

# Create your models here.
class Autor(models.Model):
    nombre = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=100)
    fecha_nacimiento = models.DateTimeField()

    def __str__(self):
        return self.nombre

class Libro(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.ForeignKey(Autor,related_name='Libro' ,on_delete=models.CASCADE)
    isbn = models.CharField(max_length=13, unique=True)
    precio = models.DecimalField(max_digits=20, decimal_places=2)
    stock = models.IntegerField()
    fecha_publicacion = models.DateField()

    def __str__(self):
        return self.titulo
