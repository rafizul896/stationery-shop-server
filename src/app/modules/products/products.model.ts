import { model, Schema } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
  },
  price: {
    type: String,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number.'],
  },
  category: {
    type: String,
    enum: {
      values: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      message:
        'Category must be one of Writing, Office Supplies, Art Supplies, Educational, or Technology',
    },
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required.'],
    min: [0, 'Quantity cannot be negative.'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'InStock status is required.'],
  },
});

const Product = model('Product', productSchema);
