from django.db import models

# Create your models here.
class Employee(models.Model):

    fire_type = fields.Many2one('employee.fire.type', string='Fire Type', Tracking='true')
    leave_reason = fields.Many2one('employee.leave.reason', string='reason for leaving the job', Tracking='true')

    order_date = fields.Date(string='Order Date', Tracking='true')
    order_no = fields.Integer(string='Order No', Tracking='true')
    date_approved = fields.Date(string='Date Approved', Tracking='true')
    fire_remarks = fields.Char(string='Remarks', Tracking='true')

    
class LeaveReason(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class FireType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


    fire_type_id = models.ForeignKey(FireType, on_delete=models.CASCADE)
    leave_reason = models.ForeignKey(LeaveReason, on_delete=models.CASCADE)
    
    order_date = models.DateField()
    order_no = models.CharField(max_length=50)
    date_approved = models.DateField()
    fire_remarks = models.CharField(max_length=255)
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
