# Generated by Django 3.2.9 on 2022-01-01 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_html_color_color_value'),
    ]

    operations = [
        migrations.AddField(
            model_name='html_font',
            name='font_url',
            field=models.URLField(blank=True),
        ),
    ]
