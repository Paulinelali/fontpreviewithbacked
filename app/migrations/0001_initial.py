# Generated by Django 3.2.9 on 2022-01-01 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='html_color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color_value', models.CharField(default='#', max_length=50)),
                ('color_name', models.CharField(max_length=50)),
            ],
        ),
    ]