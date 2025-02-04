from django.db import models

# Create your models here.
class PublicationType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Publication(models.Model):
    
    publication_type = models.ForeignKey(PublicationType, on_delete=models.CASCADE)
    subject = models.CharField(max_length=50)
    publication_date = models.CharField(max_length=50)
    no_of_pages = models.CharField(max_length=50)
    isbn = models.CharField(max_length=50)
    