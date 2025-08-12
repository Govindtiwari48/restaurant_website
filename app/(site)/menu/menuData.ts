export interface MenuItem {
    name: string;
    description: string;
    price: string;
    image?: string;
    tags?: string[];
    spiceLevel?: number; // 1-3 (mild to hot)
}

export interface MenuCategory {
    [key: string]: MenuItem[];
}

export const MenuData: MenuCategory = {
    appetizers: [
        {
            name: "Samosa (2 pieces)",
            description: "Crispy golden pastries filled with spiced potatoes and peas, served with mint and tamarind chutneys",
            price: "8.99",
            image: "/images/samosa.webp",
            tags: ["Vegetarian", "Popular"],
            spiceLevel: 1
        },
        {
            name: "Paneer Pakoda",
            description: "Cottage cheese fritters marinated in chickpea batter with aromatic spices, perfectly crispy outside",
            price: "12.99",
            image: "/images/pakoda.webp",
            tags: ["Vegetarian", "Gluten-Free"],
            spiceLevel: 2
        },
        {
            name: "Chicken Cutlet",
            description: "Tender chicken patties seasoned with traditional spices, breadcrumb coated and golden fried",
            price: "14.99",
            image: "/images/cutlet.webp",
            tags: ["Popular"],
            spiceLevel: 2
        },
        {
            name: "Mixed Pakoda Platter",
            description: "An assortment of vegetable fritters including onion, spinach, and potato, served with chutneys",
            price: "11.99",
            image: "/images/pakoda-2.webp",
            tags: ["Vegetarian", "Sharing"],
            spiceLevel: 1
        }
    ],

    tandoori: [
        {
            name: "Tandoori Chicken (Half/Full)",
            description: "Marinated in yogurt and traditional spices, cooked to perfection in our clay tandoor oven",
            price: "16.99",
            image: "/images/good-dish-1.webp",
            tags: ["Signature", "Gluten-Free"],
            spiceLevel: 2
        },
        {
            name: "Paneer Tikka",
            description: "Cubes of cottage cheese marinated in spiced yogurt, grilled with bell peppers and onions",
            price: "15.99",
            image: "/images/panner-1.webp",
            tags: ["Vegetarian", "Popular"],
            spiceLevel: 2
        },
        {
            name: "Seekh Kebab",
            description: "Minced lamb shaped on skewers, infused with aromatic herbs and spices, charcoal grilled",
            price: "18.99",
            tags: ["Signature"],
            spiceLevel: 2
        },
        {
            name: "Tandoori Mixed Grill",
            description: "A lavish platter featuring chicken tikka, seekh kebab, tandoori chicken, and paneer tikka",
            price: "28.99",
            image: "/images/good-dish-2.webp",
            tags: ["Signature", "Sharing", "Popular"],
            spiceLevel: 2
        }
    ],

    curries: [
        {
            name: "Butter Chicken",
            description: "Tender chicken in a rich, creamy tomato-based sauce with aromatic spices and fresh herbs",
            price: "17.99",
            image: "/images/curry.webp",
            tags: ["Popular", "Mild"],
            spiceLevel: 1
        },
        {
            name: "Palak Paneer",
            description: "Fresh cottage cheese cubes simmered in creamy spinach gravy with traditional spices",
            price: "15.99",
            image: "/images/palak sabzi.webp",
            tags: ["Vegetarian", "Healthy"],
            spiceLevel: 1
        },
        {
            name: "Khasta Chole",
            description: "Spiced chickpeas in a robust, tangy gravy with onions, tomatoes, and aromatic spices",
            price: "13.99",
            image: "/images/khasta-chole.webp",
            tags: ["Vegetarian", "Vegan", "Spicy"],
            spiceLevel: 3
        },
        {
            name: "Lamb Rogan Josh",
            description: "Succulent lamb slow-cooked in aromatic Kashmiri spices with a rich, velvety gravy",
            price: "21.99",
            tags: ["Signature", "Spicy"],
            spiceLevel: 3
        }
    ],

    biryani: [
        {
            name: "Chicken Biryani",
            description: "Fragrant basmati rice layered with marinated chicken, saffron, and aromatic spices",
            price: "18.99",
            image: "/images/thali-2.webp",
            tags: ["Popular", "Complete Meal"],
            spiceLevel: 2
        },
        {
            name: "Vegetable Biryani",
            description: "Aromatic basmati rice with mixed vegetables, nuts, and traditional biryani spices",
            price: "16.99",
            tags: ["Vegetarian", "Complete Meal"],
            spiceLevel: 1
        },
        {
            name: "Lamb Biryani",
            description: "Premium basmati rice with tender lamb pieces, saffron, and exotic spices",
            price: "22.99",
            tags: ["Signature", "Complete Meal"],
            spiceLevel: 2
        },
        {
            name: "Thali Special",
            description: "Complete Indian meal with rice, dal, vegetables, raita, pickle, and choice of bread",
            price: "19.99",
            image: "/images/thali.webp",
            tags: ["Complete Meal", "Vegetarian Option", "Popular"],
            spiceLevel: 2
        }
    ],

    breads: [
        {
            name: "Butter Naan",
            description: "Soft, fluffy bread baked in tandoor and brushed with clarified butter",
            price: "4.99",
            image: "/images/roti or naan.webp",
            tags: ["Popular", "Fresh Baked"],
            spiceLevel: 0
        },
        {
            name: "Garlic Naan",
            description: "Tandoor-baked bread topped with fresh garlic and herbs",
            price: "5.99",
            tags: ["Popular", "Fresh Baked"],
            spiceLevel: 0
        },
        {
            name: "Stuffed Paratha",
            description: "Whole wheat bread stuffed with spiced potatoes or paneer, served with yogurt",
            price: "7.99",
            tags: ["Vegetarian", "Filling"],
            spiceLevel: 1
        },
        {
            name: "Bread Basket",
            description: "Assortment of naan, roti, and paratha - perfect for sharing",
            price: "14.99",
            tags: ["Sharing", "Variety"],
            spiceLevel: 0
        }
    ],

    desserts: [
        {
            name: "Gulab Jamun (2 pieces)",
            description: "Golden fried milk dumplings soaked in rose-flavored sugar syrup",
            price: "6.99",
            image: "/images/sweet-1.webp",
            tags: ["Traditional", "Sweet"],
            spiceLevel: 0
        },
        {
            name: "Kulfi",
            description: "Traditional Indian ice cream made with cardamom, pistachios, and condensed milk",
            price: "5.99",
            tags: ["Cold Dessert", "Traditional"],
            spiceLevel: 0
        },
        {
            name: "Ras Malai",
            description: "Soft cheese dumplings in sweetened, thickened milk flavored with cardamom",
            price: "7.99",
            tags: ["Popular", "Traditional"],
            spiceLevel: 0
        }
    ],

    beverages: [
        {
            name: "Mango Lassi",
            description: "Creamy yogurt drink blended with fresh mango and cardamom",
            price: "4.99",
            tags: ["Refreshing", "Popular"],
            spiceLevel: 0
        },
        {
            name: "Masala Chai",
            description: "Traditional spiced tea with cardamom, cinnamon, and ginger",
            price: "3.99",
            tags: ["Hot", "Traditional"],
            spiceLevel: 1
        },
        {
            name: "Fresh Lime Soda",
            description: "Refreshing soda with fresh lime juice and mint",
            price: "3.99",
            tags: ["Refreshing", "Cold"],
            spiceLevel: 0
        },
        {
            name: "Indian Spiced Coffee",
            description: "Rich coffee brewed with cardamom and cinnamon",
            price: "4.99",
            tags: ["Hot", "Signature"],
            spiceLevel: 1
        }
    ]
};
