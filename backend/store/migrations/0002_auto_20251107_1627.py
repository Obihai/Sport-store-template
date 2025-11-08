
from django.db import migrations

def create_products(apps, schema_editor):
    Product = apps.get_model('store', 'Product')
    Product.objects.create(name='Product 1', description='This is product 1', price=10.00)
    Product.objects.create(name='Product 2', description='This is product 2', price=20.00)
    Product.objects.create(name='Product 3', description='This is product 3', price=30.00)

def delete_products(apps, schema_editor):
    Product = apps.get_model('store', 'Product')
    Product.objects.all().delete()

class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_products, delete_products),
    ]
