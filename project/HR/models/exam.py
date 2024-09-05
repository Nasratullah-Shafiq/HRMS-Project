from django.db import models

# Create your models here.
class Employee(models.Model):
    full_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    father_name = models.CharField(max_length=50)
    grand_father_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    place_of_birth = models.CharField(max_length=50)
    nationality = models.CharField(max_length=50)
    general_directorate = models.CharField(max_length=50)
    directorate = models.CharField(max_length=50)
    head = models.CharField(max_length=50)
    job_position = models.CharField(max_length=50)
    remarks = models.CharField(max_length=255)
    staus = models.CharField(max_length=50)
    religion = models.CharField(max_length=50)
    degree = models.CharField(max_length=1, choices=[
        ('H', 'High School'),
        ('B', 'Bachelor'),
        ('M', 'Master'),
        ('P', 'Phd'),
        ('A', 'Associate Professor'),
    ], default = 'B')
    mraital_status = models.CharField(max_length=1, choices=[
        ('S', 'SingleM'),
        ('M', 'Married'),
        ('W', 'Widdow'),
    ])
    gender = models.CharField(max_length=1, choices=[
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ])
    gender = models.CharField(max_length=2, choices=[
        ('A', 'A'),
        ('B', 'B'),
        ('AB', 'AB'),
        ('O', 'O'),
    ])

    # Define gender field with choices
