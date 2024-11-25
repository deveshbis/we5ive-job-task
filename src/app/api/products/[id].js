export default function handler(req, res) {
    const { id } = req.query;
  
    // ডেমো ডেটা
    const products = [
    
        {
          "productId": "P001",
          "images": "https://i.ibb.co.com/ZB2W9q0/image-3.png",
          "productName": "Kamiz",
          "description": "A rugged and waterproof Bluetooth speaker with clear sound and deep bass for outdoor adventures.",
          "review": {
            "rating": 3,
            "comment": "Excellent sound quality for its size and love the portability. Great for travel!"
          },
          "price": "BDT 3,200"
        },
        {
          "productId": "P002",
          "images": "https://i.ibb.co.com/Dky01sJ/image-4.png",
          "productName": "Half Sleeve Shirt",
          "description": "Sonic-powered toothbrush with multiple cleaning modes for superior plaque removal and gum care.",
          "review": {
            "rating": 5,
            "comment": "My teeth feel cleaner after using this, and the timer feature is very helpful."
          },
          "price": "BDT 1,500"
        },
        {
          "productId": "P003",
          "images": "https://i.ibb.co.com/FsncpCj/image-5.png",
          "productName": "Woman wearing sari",
          "description": "Lightweight and powerful cordless vacuum for deep cleaning carpets and hard floors.",
          "review": {
            "rating": 4,
            "comment": "It works well for small messes, but the battery runs out quickly on max power."
          },
          "price": "BDT 6,000"
        },
        {
          "productId": "P004",
          "images": "https://i.ibb.co.com/3dvnQbY/image-6.png",
          "productName": "Checkered shirt",
          "description": "1080p HD security camera with motion detection and night vision for indoor use.",
          "review": {
            "rating": 2,
            "comment": "Works great for monitoring, but the app could use some improvements for better user experience."
          },
          "price": "BDT 2,800"
        },
        {
          "productId": "P005",
          "images": "https://i.ibb.co.com/ZB2W9q0/image-3.png",
          "productName": "Indian Kamiz",
          "description": "A 500ml vacuum-insulated stainless steel bottle that keeps drinks hot or cold for up to 12 hours.",
          "review": {
            "rating": 1,
            "comment": "Keeps my coffee hot for hours, and it’s super durable. I take it everywhere!"
          },
      
          "price": "BDT 1,200"
        },
        {
          "productId": "P006",
          "images": "https://i.ibb.co.com/Dky01sJ/image-4.png",
          "productName": "Half Sleeve Shirt",
          "description": "Ergonomically designed memory foam pillow that provides excellent support for neck and spine alignment.",
          "review": {
            "rating": 3,
            "comment": "Very comfortable and supportive, but a bit firm for my liking."
          },
          "price": "BDT 1,600"
        },
        {
          "productId": "P007",
          "images": "https://i.ibb.co.com/FsncpCj/image-5.png",
          "productName": "Woman wearing sari",
          "description": "Multi-functional electric pressure cooker with slow cooking, rice cooking, and yogurt making options.",
          "review": {
            "rating": 5,
            "comment": "This is a game changer for cooking. I can make meals so much faster now!"
          },
          "price": "BDT 4,500"
        },
        {
          "productId": "P008",
          "images": "https://i.ibb.co.com/3dvnQbY/image-6.png",
          "productName": "Checkered shirt",
          "description": "Eco-friendly, non-slip yoga mat with extra cushioning for improved comfort during your practice.",
          "review": {
            "rating": 4,
            "comment": "Great mat for yoga and other exercises. It provides excellent grip and comfort."
          },
          "price": "BDT 900"
        },
        {
            "productId": "P009",
            "images": "https://i.ibb.co.com/31tRYZj/Pexels-Photo-by-Muneeb-Malhotra.png",
            "productName": "Indian Sari",
            "description": "High-quality wireless headphones with noise-canceling feature and up to 20 hours of playtime.",
            "review": {
              "rating": 4,
              "comment": "Great sound quality and comfortable fit. Perfect for long listening sessions."
            },
            "price": "BDT 2,500"
          },
          {
            "productId": "P010",
            "images": "https://i.ibb.co.com/FxYsQfP/Pexels-Photo-by-Bruno-Palace.png",
            "productName": "Hoodie",
            "description": "A sleek and stylish smartwatch that tracks fitness, heart rate, and sleep patterns.",
            "review": {
              "rating": 5,
              "comment": "The smartwatch is very responsive and looks great, but the battery life could be better."
            },
            "price": "BDT 4,000"
          },
          {
            "productId": "P011",
            "images": "https://i.ibb.co.com/nPstYSt/Pexels-Photo-by-Bruno-Palace-1.png",
            "productName": "Plazu",
            "description": "Burr-style electric coffee grinder for freshly ground coffee beans with customizable grind sizes.",
            "review": {
              "rating": 2,
              "comment": "This grinder is efficient, easy to use, and gives a consistent grind every time."
            },
            "price": "BDT 1,800"
          },
          {
            "productId": "P012",
            "images": "https://i.ibb.co.com/FmzyXBR/Pexels-Photo-by-Ron-Lach.png",
            "productName": "Jacket",
            "description": "A modern LED desk lamp with adjustable brightness and color temperature settings.",
            "review": {
              "rating": 1,
              "comment": "Good build quality and perfect for my workspace. However, the touch controls can be a bit finicky."
            },
            "price": "BDT 2,000"
          }
      ]
      
  
    const product = products.find((item) => item.id === id);
  
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }
  