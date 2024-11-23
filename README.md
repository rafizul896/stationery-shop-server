# Stationery Shop Server

## Overview
The **Stationery Shop API** is a backend application built with Express and TypeScript. It integrates MongoDB with Mongoose to handle the management of stationery products and customer orders. This application provides robust features for creating, reading, updating, and deleting (CRUD) products and orders, as well as handling inventory and calculating revenue from sales.

## Features

### Core Features
- **Stationery Product Management**:
  - Create, view, update, and delete stationery products.
  - Search products by name, brand, or category.

- **Order Management**:
  - Place orders for stationery products.
  - Automatically adjust inventory levels based on orders.
  - Handle insufficient stock scenarios.

- **Revenue Calculation**:
  - Aggregate and compute total revenue from all orders.

### Additional Features
- **Error Handling**:
  - Structured error responses for validation errors, missing data, and not found errors.
  - Ensures the API is resilient and provides meaningful feedback for debugging.

- **Data Validation**:
  - Mongoose schema validation to ensure data integrity for products and orders.

- **TypeScript Support**:
  - Type-safe backend for improved developer experience and reduced runtime errors.

### Project Structure

```bash
Stationery_Shop/
├── dist/                        # Compiled output files (generated after build)
├── node_modules/                # Project dependencies
├── src/                         # Source code folder
│   ├── app/                     # Application-related files
│   │   ├── config/              # Configuration files
│   │   │   └── createErrorRes.ts  # Utility for creating error responses
│   │   ├── modules/             # Feature-specific modules
│   │   │   ├── order/           # Order module
│   │   │   │   ├── order.controller.ts   # Controller for order logic
│   │   │   │   ├── order.interface.ts    # Interfaces for order types
│   │   │   │   ├── order.model.ts        # Database model for orders
│   │   │   │   ├── order.route.ts        # API routes for orders
│   │   │   │   └── order.service.ts      # Business logic for orders
│   │   │   ├── products/        # Products module
│   │   │   │   ├── products.controller.ts   # Controller for product logic
│   │   │   │   ├── products.interface.ts    # Interfaces for product types
│   │   │   │   ├── products.model.ts        # Database model for products
│   │   │   │   ├── products.route.ts        # API routes for products
│   │   │   │   └── products.service.ts      # Business logic for products
│   ├── app.ts                   # Main application configuration
│   ├── server.ts                # Server initialization file
├── .env                         # Environment variables
├── .gitignore                   # Ignored files for Git
├── .prettierrc                  # Prettier configuration
├── .prettierignore              # Ignored files for Prettier
├── eslint.config.mjs            # ESLint configuration
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Lockfile for exact dependency versions
├── tsconfig.json                # TypeScript configuration

```


## API Endpoints

### Product Endpoints
1. **Create Product**: `POST /api/products`
2. **Get All Products**: `GET /api/products`
3. **Get Product by ID**: `GET /api/products/:productId`
4. **Update Product**: `PUT /api/products/:productId`
5. **Delete Product**: `DELETE /api/products/:productId`

### Order Endpoints
1. **Place an Order**: `POST /api/orders`
2. **Calculate Revenue**: `GET /api/orders/revenue`

