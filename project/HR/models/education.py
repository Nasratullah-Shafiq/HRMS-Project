from django.db import models

# Create your models here.

class Country(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Degree(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class University(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Faculty(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Education(models.Model):

    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    degree = models.ForeignKey(Degree, on_delete=models.CASCADE)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    major = models.CharField(max_length=100)
    education_start_date = models.DateField()
    education_end_date = models.DateField()
    batch_no = models.CharField(max_length=50)
    education_remarks = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.degree} from {self.university} in {self.country}"







    # employee_id = models.CharField.Many2one('hr.employee', string='Employee')

    # country = models.CharField.Many2one('res.country', string="Country", tracking=True)
    
    # country = models.CharField(max_length=50)
    # degree_id = models.CharField(max_length=50)
    # university_id = models.CharField(max_length=50)
    # faculty_id = models.CharField(max_length=50)
    # major = models.DateField()
    # education_start_date = models.DateField()
    # education_end_date = models.DateField()
    # batch_no = models.CharField(max_length=50)
    # education_remarks = models.CharField(max_length=500)

#     education_end_date = models.CharField(max_length=50)
#     head = models.CharField(max_length=50)
#     job_position = models.CharField(max_length=50)
#     remarks = models.CharField(max_length=255)
#     staus = models.CharField(max_length=50)
#     religion = models.CharField(max_length=50)
#     degree = models.CharField(max_length=1, choices=[
#         ('H', 'High School'),
#         ('B', 'Bachelor'),
#         ('M', 'Master'),
#         ('P', 'Phd'),
#         ('A', 'Associate Professor'),
#     ], default = 'B')
#     mraital_status = models.CharField(max_length=1, choices=[
#         ('S', 'SingleM'),
#         ('M', 'Married'),
#         ('W', 'Widdow'),
#     ])
#     gender = models.CharField(max_length=1, choices=[
#         ('M', 'Male'),
#         ('F', 'Female'),
#         ('O', 'Other'),
#     ])
#     gender = models.CharField(max_length=2, choices=[
#         ('A', 'A'),
#         ('B', 'B'),
#         ('AB', 'AB'),
#         ('O', 'O'),
#     ])








# education_ids = fields.One2many('employee.education', 'employee_id', string='Education')


# # Your Python code (e.g., in a controller or model)

# class EmployeeEducation(models.Model):
#     _name = 'employee.education'
#     _description = 'Employee Education'

#     employee_id = models.CharField.Many2one('hr.employee', string='Employee')

#     country = models.CharField.Many2one('res.country', string="Country", tracking=True)
#     degree_id = models.CharField.Many2one('employee.degree', string="Degree")
#     university_id = models.CharField.Many2one('employee.university', string="University")
#     faculty_id = models.CharField.Many2one('employee.faculty', string="Faculty")
#     major = models.CharField.Char(string='Major')
#     education_start_date = models.CharField.Date(string='Start Date')
#     education_end_date = models.CharField.Date(string='End Date')
#     batch_no = models.CharField.Integer(string='Batch No')
#     education_remarks = models.CharField.Char(string='Remarks')



# class University(models.Model):
#     _name = 'employee.university'
#     _description = 'Employee University'

#     name = fields.Char(string='University')

# class Degree(models.Model):
#     _name = 'employee.degree'
#     _description = 'Employee Degree'

#     name = fields.Char(string='Degree')


# class Faculty(models.Model):
#     _name = 'employee.faculty'
#     _description = 'Employee Faculty'

#     name = fields.Char(string='faculty')


    # Define gender field with choices
