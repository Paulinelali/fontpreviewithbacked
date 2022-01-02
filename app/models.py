from django.db import models
# username: Taylor; password: Lucky1125@
# Create your models here.
class html_font(models.Model):
    font_value = models.CharField(max_length=50, default='f', blank=True)
    font_name = models.CharField(max_length=50, blank=False)
    font_url = models.URLField(max_length=500, blank=True)

    def __str__(self):
        return self.font_name
    
class html_shadows(models.Model):
    shadow_value = models.CharField(max_length=50, default='sh', blank=False)
    shadow_name = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return self.shadow_name
    
class html_color(models.Model):
    color_value = models.CharField(max_length=50, default='fnc', blank=False)
    color_name = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return self.color_name
    
