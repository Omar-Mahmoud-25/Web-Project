# Generated by Django 5.0.6 on 2024-05-16 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0002_move_author_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
    ]
