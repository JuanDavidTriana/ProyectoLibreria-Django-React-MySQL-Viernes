from django.test import TestCase

# Create your tests here.
import unittest
from libreria.libreria_app.models import Libro

class TestLibroStrMethod(unittest.TestCase):
    def test_str_method_returns_titulo(self):
        libro = Libro(titulo='Example Title')
        self.assertEqual(str(libro), 'Example Title')

    def test_str_method_returns_string(self):
        libro = Libro(titulo='Example Title')
        self.assertIsInstance(str(libro), str)

    def test_str_method_raises_error_if_titulo_not_set(self):
        libro = Libro()
        with self.assertRaises(AttributeError):
            str(libro)

if __name__ == '__main__':
    unittest.main()