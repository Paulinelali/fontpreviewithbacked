# Generated by Django 3.2.9 on 2022-01-01 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_alter_html_font_font_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='html_font',
            name='font_url',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
