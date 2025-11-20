
// Product Data with enhanced details

       const products = [
    {
        id: 1,
        name: "Diamond Whisper Ring",
        category: "rings",
        subcategory: "precious",
        brand: "Velisse Jewels",
        price: 98200,
        rating: 5,
        image: "https://picsum.photos/seed/diamond-ring-18k-gold/400/300",
        description: "A timeless diamond ring crafted with precision and pure brilliance.",
        features: ["18K Gold", "1.5 Carat Diamond", "Size 7", "Certified", "Lifetime Warranty"],
        mainImage: "images/EPROJECTS IMAGES/Diamond Whisper Ring (MAIN).jpg",
        sideImages: [
            "images/EPROJECTS IMAGES/Diamond Whisper Ring (HOVER).jpg"
        ]
    },
    {
        id: 2,
        name: "Eternal Radiance Necklace",
        category: "necklaces",
        subcategory: "precious",
        brand: "Crownelle",
        price: 76500,
        rating: 5,
        image: "https://picsum.photos/seed/white-gold-diamond-necklace/400/300",
        description: "An elegant necklace symbolizing eternal love and light.",
        features: ["White Gold", "2 Carat Diamonds", "18\" Length", "Clasp Lock", "Gift Box"],
        mainImage: "images/EPROJECTS IMAGES/eternal_radiance_necklace_elegant_gold_and.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/eternal_radiance_necklace_elegant_gold_and (1).jpeg"
        ]
    },
    {
        id: 3,
        name: "Ocean Bloom Earrings",
        category: "earrings",
        subcategory: "semi-precious",
        brand: "Pascal & Co.",
        price: 34200,
        rating: 4,
        image: "https://picsum.photos/seed/blue-sapphire-earrings/400/300",
        description: "Blue sapphire-inspired earrings capturing the beauty of the ocean.",
        features: ["Sapphire Stones", "Silver Setting", "Hypoallergenic", "Lightweight", "Waterproof"],
        mainImage: "images/EPROJECTS IMAGES/ocean_bloom_earrings_sapphire_blue_gemstone.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/ocean_bloom_earrings_sapphire_blue_gemstone (1).jpeg"
         
        ]
    },
   {
    id: 4,
    name: "Graceful Halo Bracelet",
    category: "bracelets",
    subcategory: "semi-precious",
    brand: "Seraphine Jewels",
    price: 28800,
    rating: 5,
    image: "https://picsum.photos/seed/rose-gold-halo-bracelet/400/300",
    description: "Delicately crafted bracelet with a halo of charm and grace.",
    features: ["Rose Gold", "Adjustable", "7\" Length", "Secure Clasp", "Comfort Fit"],
    mainImage: "images/EPROJECTS IMAGES/graceful_halo_bracelet_stylish_silver_bracelet.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/graceful_halo_bracelet_stylish_silver_bracelet (1).jpeg"
    ]
},
{
    id: 5,
    name: "Twilight Embrace Pendant",
    category: "pendants",
    subcategory: "precious",
    brand: "Lunara Atelier",
    price: 61400,
    rating: 5,
    image: "https://picsum.photos/seed/platinum-diamond-pendant/400/300",
    description: "A pendant inspired by twilight's mysterious beauty.",
    features: ["Platinum", "Diamond Accent", "Chain Included", "Gift Box", "Certificate"],
    mainImage: "images/EPROJECTS IMAGES/twilight_embrace_pendant_luxury_pendant_inspired.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/twilight_embrace_pendant_luxury_pendant_inspired (1).jpeg"
    ]
},
{
    id: 6,
    name: "Celestial Spark Ring",
    category: "rings",
    subcategory: "precious",
    brand: "Crownelle",
    price: 72400,
    rating: 4,
    image: "https://picsum.photos/seed/yellow-gold-star-ring/400/300",
    description: "A brilliant celestial ring that glimmers like a shooting star.",
    features: ["Yellow Gold", "Star Design", "Size 6", "Engraving Available", "Custom Design"],
    mainImage: "images/EPROJECTS IMAGES/celestial_themed_gold_ring_sparkling_like_a_star.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/celestial_themed_gold_ring_sparkling_like_a_star (1).jpeg"
    ]
},
{
    id: 7,
    name: "Whispering Pearl Chain",
    category: "necklaces",
    subcategory: "semi-precious",
    brand: "Pascal & Co.",
    price: 40200,
    rating: 5,
    image: "https://picsum.photos/seed/freshwater-pearl-necklace/400/300",
    description: "Soft pearls linked with quiet sophistication.",
    features: ["Freshwater Pearls", "Silver Clasp", "16\" Length", "Classic Design", "Premium Quality"],
    mainImage: "images/EPROJECTS IMAGES/whispering_pearl_chain_soft_pearl_necklace.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/whispering_pearl_chain_soft_pearl_necklace (1).jpeg"
    ]
},
{
    id: 8,
    name: "Morning Star Earrings",
    category: "earrings",
    subcategory: "artificial",
    brand: "Velisse Jewels",
    price: 17800,
    rating: 4,
    image: "https://picsum.photos/seed/cubic-zirconia-star-earrings/400/300",
    description: "Lightweight star-shaped earrings made for daily shine.",
    features: ["Cubic Zirconia", "Silver Plated", "Post Back", "Daily Wear", "Affordable"],
    mainImage: "images/EPROJECTS IMAGES/morning_star_earrings_lightweight_star_shaped_earrings.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/morning_star_earrings_lightweight_star_shaped_earrings (1).jpeg"
    ]
},
{
    id: 9,
    name: "Pure Serenity Bangle",
    category: "bracelets",
    subcategory: "artificial",
    brand: "Seraphine Jewels",
    price: 16800,
    rating: 4,
    image: "https://picsum.photos/seed/stainless-steel-bangle/400/300",
    description: "Minimal bangle design representing calm and purity.",
    features: ["Stainless Steel", "Polished Finish", "2.5\" Width", "One Size", "Modern Style"],
    mainImage: "images/EPROJECTS IMAGES/pure_serenity_bangle_minimal_golden_bangle.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/pure_serenity_bangle_minimal_golden_bangle (1).jpeg"
    ]
},
{
    id: 10,
    name: "Golden Mist Pendant",
    category: "pendants",
    subcategory: "semi-precious",
    brand: "Lunara Atelier",
    price: 38600,
    rating: 5,
    image: "https://picsum.photos/seed/gold-vermeil-textured-pendant/400/300",
    description: "A gold-finished pendant with a smooth mist-like pattern.",
    features: ["Gold Vermeil", "Textured Surface", "Chain Included", "Modern Style", "Elegant"],
    mainImage: "images/EPROJECTS IMAGES/golden_mist_pendant_gold_finished_pendant_with.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/golden_mist_pendant_gold_finished_pendant_with (1).jpeg"
    ]
},

    {
        id: 11,
        name: "Royal Mirage Ring",
        category: "rings",
        subcategory: "precious",
        brand: "Pascal & Co.",
        price: 82100,
        rating: 5,
        image: "https://picsum.photos/seed/emerald-diamond-ring/400/300",
        description: "A ring fit for royalty with mesmerizing stonework.",
        features: ["18K White Gold", "Emerald Center", "Diamond Accents", "Size 7.5", "Royal Design"],
        mainImage: "images/EPROJECTS IMAGES/royal_mirage_ring_royal_luxury_ring.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/royal_mirage_ring_royal_luxury_ring (1).jpeg"
        ]
    },
    {
        id: 12,
        name: "Infinite Bloom Necklace",
        category: "necklaces",
        subcategory: "semi-precious",
        brand: "Velisse Jewels",
        price: 41400,
        rating: 4,
        image: "https://picsum.photos/seed/rose-gold-floral-necklace/400/300",
        description: "A graceful necklace adorned with floral accents.",
        features: ["Floral Design", "Rose Gold", "Adjustable", "Spring Collection", "Trendy"],
        mainImage: "images/EPROJECTS IMAGES/infinite_bloom_necklace_floral_themed_necklace_with.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/infinite_bloom_necklace_floral_themed_necklace_with (1).jpeg"
        ]
    },
    {
        id: 13,
        name: "Crimson Aura Earrings",
        category: "earrings",
        subcategory: "semi-precious",
        brand: "Crownelle",
        price: 32400,
        rating: 5,
        image: "https://picsum.photos/seed/ruby-drop-earrings/400/300",
        description: "Ruby-toned earrings designed to turn every glance red.",
        features: ["Ruby Stones", "Hook Back", "Lightweight", "Statement Piece", "Luxury"],
        mainImage: "images/EPROJECTS IMAGES/crimson_aura_earrings_ruby_red_earrings_shining.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/crimson_aura_earrings_ruby_red_earrings_shining (1).jpeg"
        ]
    },
    {
        id: 14,
        name: "Luminous Heart Bracelet",
        category: "bracelets",
        subcategory: "artificial",
        brand: "Seraphine Jewels",
        price: 18400,
        rating: 4,
        image: "https://picsum.photos/seed/heart-charm-bracelet/400/300",
        description: "Heart-shaped bracelet glowing with subtle charm.",
        features: ["Heart Charms", "Silver Tone", "7\" Length", "Gift Ready", "Romantic"],
        mainImage: "images/EPROJECTS IMAGES/luminous_heart_bracelet_heart_shaped_bracelet_glowing.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/luminous_heart_bracelet_heart_shaped_bracelet_glowing (1).jpeg"
        ]
    },
    {
        id: 15,
        name: "Silver Tempest Pendant",
        category: "pendants",
        subcategory: "precious",
        brand: "Lunara Atelier",
        price: 59200,
        rating: 5,
        image: "https://picsum.photos/seed/sterling-silver-textured-pendant/400/300",
        description: "A silver storm of luxury, crafted with bold energy.",
        features: ["Sterling Silver", "Textured Design", "Chain Included", "Bold Statement", "Unique"],
        mainImage: "images/EPROJECTS IMAGES/silver_tempest_pendant_bold_silver_pendant.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/silver_tempest_pendant_bold_silver_pendant (1).jpeg"
        ]
    },
    {
        id: 16,
        name: "Golden Empire Ring",
        category: "rings",
        subcategory: "precious",
        brand: "Pascal & Co.",
        price: 61100,
        rating: 5,
        image: "https://picsum.photos/seed/22k-gold-wide-band-ring/400/300",
        description: "A bold gold ring that reigns supreme in elegance.",
        features: ["22K Gold", "Wide Band", "Size 8", "Luxury Piece", "Investment Grade"],
        mainImage: "images/EPROJECTS IMAGES/golden_empire_ring_heavy_gold_ring.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/golden_empire_ring_heavy_gold_ring (1).jpeg"
        ]
    },
    {
        id: 17,
        name: "Secret Garden Necklace",
        category: "necklaces",
        subcategory: "semi-precious",
        brand: "Velisse Jewels",
        price: 44200,
        rating: 4,
        image: "https://picsum.photos/seed/emerald-yellow-gold-necklace/400/300",
        description: "Emerald-inspired necklace blossoming with beauty.",
        features: ["Emerald Accents", "Yellow Gold", "18\" Length", "Nature Inspired", "Elegant"],
        mainImage: "images/EPROJECTS IMAGES/secret_garden_necklace_emerald_green_necklace_inspired.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/secret_garden_necklace_emerald_green_necklace_inspired (1).jpeg"
        ]
    },
    {
        id: 18,
        name: "Moonlit Crown Earrings",
        category: "earrings",
        subcategory: "semi-precious",
        brand: "Crownelle",
        price: 28800,
        rating: 4,
        image: "https://picsum.photos/seed/crown-design-silver-earrings/400/300",
        description: "Moonlight-inspired silver earrings for elegant evenings.",
        features: ["Crown Design", "Silver", "Evening Wear", "Elegant", "Sophisticated"],
        mainImage: "images/EPROJECTS IMAGES/moonlit_crown_earrings_silver_earrings_with.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/moonlit_crown_earrings_silver_earrings_with (1).jpeg"
        ]
    },
    {
        id: 19,
        name: "Velvet Sky Bracelet",
        category: "bracelets",
        subcategory: "artificial",
        brand: "Seraphine Jewels",
        price: 16500,
        rating: 4,
        image: "https://picsum.photos/seed/velvet-finish-bracelet/400/300",
        description: "A soft, silky bracelet that mirrors the velvet sky.",
        features: ["Velvet Finish", "Adjustable", "Comfort Fit", "Affordable", "Stylish"],
        mainImage: "images/EPROJECTS IMAGES/velvet_sky_bracelet_smooth_bracelet_with.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/velvet_sky_bracelet_smooth_bracelet_with (1).jpeg"
        ]
    },
    {
        id: 20,
        name: "Eternal Flame Pendant",
        category: "pendants",
        subcategory: "precious",
        brand: "Lunara Atelier",
        price: 56400,
        rating: 5,
        image: "https://picsum.photos/seed/eternal-flame-pendant/400/300",
        description: "A pendant of passion — glowing like an eternal flame.",
        features: ["Fire Design", "Red Gold", "Chain Included", "Passionate", "Unique"],
        mainImage: "images/EPROJECTS IMAGES/eternal_flame_pendant_fiery_gold_pendant.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/eternal_flame_pendant_fiery_gold_pendant (1).jpeg"
        ]
    },

{
    id: 21,
    name: "Roman Muse Ring",
    category: "rings",
    subcategory: "semi-precious",
    brand: "Seraphine Jewels",
    price: 39800,
    rating: 5,
    image: "https://picsum.photos/seed/roman-muse-ring/400/300",
    description: "Inspired by ancient Roman elegance, this ring radiates cultured charm.",
    features: ["Silver", "Roman Design", "Size 7", "Engraved Details", "Antique Finish"],
    mainImage: "images/EPROJECTS IMAGES/roman_muse_ring_ancient_roman_inspired_elegant.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/roman_muse_ring_ancient_roman_inspired_elegant (1).jpeg"]
},
{
    id: 22,
    name: "Aurora Dream Necklace",
    category: "necklaces",
    subcategory: "precious",
    brand: "Pascal & Co.",
    price: 58300,
    rating: 5,
    image: "https://picsum.photos/seed/aurora-dream-necklace/400/300",
    description: "Shimmering with the hues of dawn, this necklace is a dream realized.",
    features: ["White Gold", "Diamond Accents", "16\" Length", "Magnetic Clasp", "Gift Box"],
    mainImage: "images/EPROJECTS IMAGES/aurora_dream_necklace_shimmering_necklace_inspired.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/aurora_dream_necklace_shimmering_necklace_inspired (1).jpeg"]
},
{
    id: 23,
    name: "Desert Rose Earrings",
    category: "earrings",
    subcategory: "semi-precious",
    brand: "Lunara Atelier",
    price: 42600,
    rating: 4,
    image: "https://picsum.photos/seed/desert-rose-earrings/400/300",
    description: "Soft gold tones inspired by the desert's hidden beauty.",
    features: ["Rose Gold", "Petal Design", "Hook Back", "Lightweight", "Hypoallergenic"],
    mainImage: "images/EPROJECTS IMAGES/desert_rose_earrings_gold_toned_earrings_inspired.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/desert_rose_earrings_gold_toned_earrings_inspired (1).jpeg"]
},
{
    id: 24,
    name: "Sapphire Bloom Bracelet",
    category: "bracelets",
    subcategory: "precious",
    brand: "Velisse Jewels",
    price: 66900,
    rating: 5,
    image: "https://picsum.photos/seed/sapphire-bloom-bracelet/400/300",
    description: "A bracelet of deep blue sapphires that blooms with light.",
    features: ["White Gold", "Sapphire Stones", "7\" Length", "Secure Clasp", "Luxury Box"],
    mainImage: "images/EPROJECTS IMAGES/sapphire_bloom_bracelet_deep_blue_sapphire.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/sapphire_bloom_bracelet_deep_blue_sapphire (1).jpeg"]
},
{
    id: 25,
    name: "Golden Tide Pendant",
    category: "pendants",
    subcategory: "semi-precious",
    brand: "Crownelle",
    price: 43100,
    rating: 4,
    image: "https://picsum.photos/seed/golden-tide-pendant/400/300",
    description: "A golden wave frozen in time — elegant and bold.",
    features: ["Yellow Gold", "Wave Design", "Chain Included", "Polished Finish", "Gift Ready"],
    mainImage: "images/EPROJECTS IMAGES/golden_tide_pendant_golden_pendant_shaped.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/golden_tide_pendant_golden_pendant_shaped (1).jpeg"]
},
{
    id: 26,
    name: "Marble Dawn Ring",
    category: "rings",
    subcategory: "semi-precious",
    brand: "Seraphine Jewels",
    price: 39800,
    rating: 4,
    image: "https://picsum.photos/seed/marble-dawn-ring/400/300",
    description: "Marble-textured ring reflecting the calm of a new dawn.",
    features: ["Silver", "Marble Inlay", "Size 7", "Adjustable Band", "Unique Pattern"],
    mainImage: "images/EPROJECTS IMAGES/marble_dawn_ring_marble_textured_ring_with.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/marble_dawn_ring_marble_textured_ring_with (1).jpeg"]
},
{
    id: 27,
    name: "Midnight Opal Necklace",
    category: "necklaces",
    subcategory: "precious",
    brand: "Velisse Jewels",
    price: 78400,
    rating: 5,
    image: "https://picsum.photos/seed/midnight-opal-necklace/400/300",
    description: "Deep opal hues capturing the essence of midnight skies.",
    features: ["Platinum", "Opal Stones", "18\" Length", "Diamond Accents", "Certificate"],
    mainImage: "images/EPROJECTS IMAGES/midnight_opal_necklace_opal_necklace_with.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/midnight_opal_necklace_opal_necklace_with (1).jpeg"]
},
{
    id: 28,
    name: "Velvet Pearl Earrings",
    category: "earrings",
    subcategory: "semi-precious",
    brand: "Crownelle",
    price: 30900,
    rating: 4,
    image: "https://picsum.photos/seed/velvet-pearl-earrings/400/300",
    description: "A pair of silky pearl earrings exuding timeless grace.",
    features: ["Freshwater Pearls", "Silver Setting", "Drop Design", "Hypoallergenic", "Gift Box"],
    mainImage: "images/EPROJECTS IMAGES/velvet_pearl_earrings_silky_pearl_earrings.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/velvet_pearl_earrings_silky_pearl_earrings (1).jpeg"]
},
{
    id: 29,
    name: "Amber Queen Bracelet",
    category: "bracelets",
    subcategory: "semi-precious",
    brand: "Pascal & Co.",
    price: 42700,
    rating: 4,
    image: "https://picsum.photos/seed/amber-queen-bracelet/400/300",
    description: "Golden amber hues woven into a royal bracelet design.",
    features: ["Gold Plated", "Amber Stones", "7\" Length", "Toggle Clasp", "Royal Design"],
    mainImage: "images/EPROJECTS IMAGES/amber_queen_bracelet_golden_amber_bracelet.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/amber_queen_bracelet_golden_amber_bracelet (1).jpeg"]
},
{
    id: 30,
    name: "Radiant Eclipse Pendant",
    category: "pendants",
    subcategory: "precious",
    brand: "Lunara Atelier",
    price: 68200,
    rating: 5,
    image: "https://picsum.photos/seed/radiant-eclipse-pendant/400/300",
    description: "A celestial pendant symbolizing the beauty of an eclipse.",
    features: ["White Gold", "Black Diamond", "Chain Included", "Designer Piece", "Certificate"],
    mainImage: "images/EPROJECTS IMAGES/radiant_eclipse_pendant_celestial_pendant_representing.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/radiant_eclipse_pendant_celestial_pendant_representing (1).jpeg"]
},

   {
    id: 31,
    name: "Enchanted Lily Ring",
    category: "rings",
    subcategory: "semi-precious",
    brand: "Seraphine Jewels",
    price: 39800,
    rating: 4,
    image: "https://picsum.photos/seed/enchanted-lily-ring/400/300",
    description: "A lily-inspired ring that captures the charm of spring.",
    features: ["Rose Gold", "Lily Design", "Size 7", "Engraved Details", "Nature Inspired"],
    mainImage: "images/EPROJECTS IMAGES/enchanted_lily_ring_lily_shaped_ring_with.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/enchanted_lily_ring_lily_shaped_ring_with (1).jpeg"]
},
{
    id: 32,
    name: "Whispering Meadow Necklace",
    category: "necklaces",
    subcategory: "precious",
    brand: "Velisse Jewels",
    price: 59800,
    rating: 5,
    image: "https://picsum.photos/seed/whispering-meadow-necklace/400/300",
    description: "A meadow-inspired necklace crafted with green gemstones.",
    features: ["Yellow Gold", "Emerald Accents", "18\" Length", "Nature Theme", "Gift Box"],
    mainImage: "images/EPROJECTS IMAGES/whispering_meadow_necklace_green_gemstone_necklace.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/whispering_meadow_necklace_green_gemstone_necklace (1).jpeg"]
},
{
    id: 33,
    name: "Celeste Drop Earrings",
    category: "earrings",
    subcategory: "semi-precious",
    brand: "Pascal & Co.",
    price: 43700,
    rating: 5,
    image: "https://picsum.photos/seed/celeste-drop-earrings/400/300",
    description: "Celestial-themed earrings with gentle silver drops.",
    features: ["Sterling Silver", "Drop Design", "Star Motif", "Lightweight", "Elegant"],
    mainImage: "images/EPROJECTS IMAGES/celeste_drop_earrings_silver_drop_earrings.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/celeste_drop_earrings_silver_drop_earrings (1).jpeg"]
},
{
    id: 34,
    name: "Petal Mirage Bracelet",
    category: "bracelets",
    subcategory: "semi-precious",
    brand: "Crownelle",
    price: 33200,
    rating: 4,
    image: "https://picsum.photos/seed/petal-mirage-bracelet/400/300",
    description: "Soft floral bracelet that mirrors delicate mirages.",
    features: ["Rose Gold", "Petal Links", "7\" Length", "Adjustable", "Floral Design"],
    mainImage: "images/EPROJECTS IMAGES/petal_mirage_bracelet_floral_inspired_bracelet_detailed.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/petal_mirage_bracelet_floral_inspired_bracelet_detailed (1).jpeg"]
},
{
    id: 35,
    name: "Aurora Garden Pendant",
    category: "pendants",
    subcategory: "precious",
    brand: "Lunara Atelier",
    price: 64200,
    rating: 5,
    image: "https://picsum.photos/seed/aurora-garden-pendant/400/300",
    description: "A pendant blooming with the essence of an aurora garden.",
    features: ["White Gold", "Multi-colored Gems", "Chain Included", "Nature Inspired", "Certificate"],
    mainImage: "images/EPROJECTS IMAGES/aurora_garden_pendant_colorful_gemstone_pendant.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/aurora_garden_pendant_colorful_gemstone_pendant (1).jpeg"]
},
{
    id: 36,
    name: "Dream Blossom Ring",
    category: "rings",
    subcategory: "semi-precious",
    brand: "Seraphine Jewels",
    price: 30800,
    rating: 4,
    image: "https://picsum.photos/seed/dream-blossom-ring/400/300",
    description: "Bloom-shaped ring symbolizing love and imagination.",
    features: ["Silver", "Floral Design", "Size 7", "Polished Finish", "Romantic"],
    mainImage: "images/EPROJECTS IMAGES/dream_blossom_ring_bloom_shaped_gold_ring.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/dream_blossom_ring_bloom_shaped_gold_ring (1).jpeg"]
},
{
    id: 37,
    name: "Silver Horizon Necklace",
    category: "necklaces",
    subcategory: "semi-precious",
    brand: "Pascal & Co.",
    price: 42800,
    rating: 5,
    image: "https://picsum.photos/seed/silver-horizon-necklace/400/300",
    description: "A silver necklace that stretches like the horizon at dusk.",
    features: ["Sterling Silver", "Minimalist Design", "18\" Length", "Adjustable", "Modern"],
    mainImage: "images/EPROJECTS IMAGES/silver_necklace_stretching_in_horizon_style_white.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/silver_necklace_stretching_in_horizon_style_white (1).jpeg"]
},
{
    id: 38,
    name: "Moon Petal Earrings",
    category: "earrings",
    subcategory: "artificial",
    brand: "Crownelle",
    price: 16800,
    rating: 4,
    image: "https://picsum.photos/seed/moon-petal-earrings/400/300",
    description: "Gentle moon petal earrings made for everyday wear.",
    features: ["Silver Plated", "Petal Design", "Post Back", "Lightweight", "Affordable"],
    mainImage: "images/EPROJECTS IMAGES/moon_petal_earrings_moon_shaped_petal_earrings.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/moon_petal_earrings_moon_shaped_petal_earrings (1).jpeg"]
},
{
    id: 39,
    name: "Golden Dusk Bracelet",
    category: "bracelets",
    subcategory: "semi-precious",
    brand: "Velisse Jewels",
    price: 43400,
    rating: 5,
    image: "https://picsum.photos/seed/golden-dusk-bracelet/400/300",
    description: "A bracelet glowing like the last light of dusk.",
    features: ["Rose Gold", "Textured Links", "7\" Length", "Toggle Clasp", "Evening Wear"],
    mainImage: "images/EPROJECTS IMAGES/golden_dusk_bracelet_bracelet_glowing_with.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/golden_dusk_bracelet_bracelet_glowing_with (1).jpeg"]
},
{
    id: 40,
    name: "Eternal Blossom Pendant",
    category: "pendants",
    subcategory: "precious",
    brand: "Lunara Atelier",
    price: 69200,
    rating: 5,
    image: "https://picsum.photos/seed/eternal-blossom-pendant/400/300",
    description: "An exquisite pendant blooming with everlasting grace.",
    features: ["White Gold", "Diamond Accents", "Chain Included", "Floral Design", "Certificate"],
    mainImage: "images/EPROJECTS IMAGES/eternal_blossom_pendant_elegant_pendant_shaped.jpeg",
    sideImages: ["images/EPROJECTS IMAGES/eternal_blossom_pendant_elegant_pendant_shaped (1).jpeg"]
}

];
// DOM Elements
const productsGrid =  document.getElementById('productsGrid');
const resultCount = document.getElementById('resultCount');
const categoryFilter = document.getElementById('categoryFilter');
const subcategoryFilter = document.getElementById('subcategoryFilter');
const brandFilter = document.getElementById('brandFilter');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');
const pagination = document.getElementById('pagination');
const quickViewModal = document.getElementById('quickViewModal');
const modalClose = document.getElementById('modalClose');
const modalImageGallery = document.getElementById('modalImageGallery');
const modalProductName = document.getElementById('modalProductName');
const modalCategory = document.getElementById('modalCategory');
const modalSubcategory = document.getElementById('modalSubcategory');
const modalBrand = document.getElementById('modalBrand');
const modalProductPrice = document.getElementById('modalProductPrice');
const cartCount = document.getElementById('cartCount');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const viewBtns = document.querySelectorAll('.view-btn');

// State
let currentPage = 1;
let productsPerPage = 10; // Show 10 products per page
let filteredProducts = [...products];
let cartItems = [];
let wishlistItems = [];
let currentView = 'grid';
let currentProductInModal = null;
let isAnimating = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderProducts();
    setupEventListeners();
    animateElements();
    initParticles();
});

// Populate filter dropdowns dynamically
function populateFilters() {
    // Get unique values from products
    const categories = [...new Set(products.map(p => p.category))];
    const subcategories = [...new Set(products.map(p => p.subcategory))];
    const brands = [...new Set(products.map(p => p.brand))];
    
    // Populate category filter
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });
    
    // Populate subcategory filter
    subcategoryFilter.innerHTML = '<option value="all">All Types</option>';
    subcategories.forEach(subcategory => {
        const option = document.createElement('option');
        option.value = subcategory;
        // Format the subcategory name (e.g., "semi-precious" -> "Semi-Precious")
        const formattedName = subcategory.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join('-');
        option.textContent = formattedName;
        subcategoryFilter.appendChild(option);
    });
    
    // Populate brand filter
    brandFilter.innerHTML = '<option value="all">All Brands</option>';
    brands.sort().forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter listeners
    categoryFilter.addEventListener('change', () => {
        updateSubcategoryFilter();
        applyFilters();
    });
    subcategoryFilter.addEventListener('change', applyFilters);
    brandFilter.addEventListener('change', applyFilters);
    
    // Search
    searchInput.addEventListener('input', debounce(applyFilters, 300));
    searchBtn.addEventListener('click', applyFilters);
    
    // View options
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            
            // Add animation class
            productsGrid.style.opacity = '0';
            setTimeout(() => {
                renderProducts();
                productsGrid.style.opacity = '1';
            }, 300);
        });
    });
    
    // Modal
    modalClose.addEventListener('click', closeModal);
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) closeModal();
    });
    
    // Mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && quickViewModal.style.display === 'flex') {
            closeModal();
        }
    });
}

// Update subcategory filter based on selected category
function updateSubcategoryFilter() {
    const selectedCategory = categoryFilter.value;
    const subcategories = selectedCategory === 'all' 
        ? [...new Set(products.map(p => p.subcategory))]
        : [...new Set(products.filter(p => p.category === selectedCategory).map(p => p.subcategory))];
    
    subcategoryFilter.innerHTML = '<option value="all">All Types</option>';
    subcategories.forEach(subcategory => {
        const option = document.createElement('option');
        option.value = subcategory;
        const formattedName = subcategory.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join('-');
        option.textContent = formattedName;
        subcategoryFilter.appendChild(option);
    });
}

// Render Products
function renderProducts() {
    if (isAnimating) return;
    isAnimating = true;
    
    // Fade out current products
    const currentCards = productsGrid.querySelectorAll('.product-card');
    currentCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.95)';
        }, index * 30);
    });
    
    // Clear and render new products after fade out
    setTimeout(() => {
        productsGrid.innerHTML = '';
        productsGrid.className = `products-grid ${currentView}-view`;
        
        const start = (currentPage - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productsToDisplay = filteredProducts.slice(start, end);
        
        productsToDisplay.forEach((product, index) => {
            const productCard = createProductCard(product);
            productCard.style.animationDelay = `${index * 0.05}s`;
            productsGrid.appendChild(productCard);
        });
        
        updateResultCount();
        renderPagination();
        isAnimating = false;
    }, currentCards.length > 0 ? 300 : 0);
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-glow"></div>
        <div class="product-image-container">
            <img src="${product.mainImage}" alt="${product.name}" class="product-image">
            <div class="product-overlay"></div>
            <div class="product-actions">
                <button class="action-btn wishlist-btn ${wishlistItems.includes(product.id) ? 'active' : ''}" data-id="${product.id}">
                    <i class="${wishlistItems.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-brand">
                <span class="brand-label">by</span>
                <span class="brand-name">${product.brand}</span>
            </div>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-text">(${product.rating}.0)</span>
            </div>
            <div class="product-price-container">
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <div class="price-glow"></div>
            </div>
            <button class="add-to-cart-btn" data-id="${product.id}">
                <span class="btn-icon">
                    <i class="fas fa-shopping-bag"></i>
                </span>
                <span class="btn-text">Add to Cart</span>
                <span class="btn-shine"></span>
            </button>
        </div>
    `;
    
    // Add event listeners with enhanced animations
    const wishlistBtn = card.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', () => {
        wishlistBtn.style.transform = 'scale(0.9) rotate(15deg)';
        setTimeout(() => {
            wishlistBtn.style.transform = '';
            toggleWishlist(product.id);
        }, 150);
    });
    
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        addToCartBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            addToCartBtn.style.transform = '';
            addToCart(product.id);
        }, 150);
    });
    
    return card;
}

// Generate Star Rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Apply Filters
function applyFilters() {
    const category = categoryFilter.value;
    const subcategory = subcategoryFilter.value;
    const brand = brandFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    filteredProducts = products.filter(product => {
        const matchesCategory = category === 'all' || product.category === category;
        const matchesSubcategory = subcategory === 'all' || product.subcategory === subcategory;
        const matchesBrand = brand === 'all' || product.brand === brand;
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm) || 
            product.brand.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSubcategory && matchesBrand && matchesSearch;
    });
    
    currentPage = 1;
    
    // Add filter animation
    const filtersSection = document.querySelector('.filters-section');
    filtersSection.style.transform = 'scale(0.98)';
    setTimeout(() => {
        filtersSection.style.transform = '';
        renderProducts();
    }, 200);
}

// Update Result Count
function updateResultCount() {
    const countElement = document.getElementById('resultCount');
    countElement.style.transform = 'scale(1.2)';
    countElement.style.color = '#d4af37';
    setTimeout(() => {
        countElement.textContent = filteredProducts.length;
        countElement.style.transform = '';
        countElement.style.color = '';
    }, 200);
}

// Render Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    pagination.innerHTML = '';
    
    // Always show pagination
    pagination.style.display = 'flex';
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            scrollToTop();
        }
    });
    pagination.appendChild(prevBtn);
    
    // Page numbers - show all pages for better navigation
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    // Adjust start page if we're near end
    if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    // First page and dots if needed
    if (startPage > 1) {
        const firstPageBtn = document.createElement('button');
        firstPageBtn.className = 'page-btn';
        firstPageBtn.textContent = '1';
        firstPageBtn.addEventListener('click', () => {
            currentPage = 1;
            renderProducts();
            scrollToTop();
        });
        pagination.appendChild(firstPageBtn);
        
        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.className = 'page-dots';
            dots.textContent = '...';
            pagination.appendChild(dots);
        }
    }
    
    // Page numbers in range
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderProducts();
            scrollToTop();
        });
        pagination.appendChild(pageBtn);
    }
    
    // Last page and dots if needed
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.className = 'page-dots';
            dots.textContent = '...';
            pagination.appendChild(dots);
        }
        
        const lastPageBtn = document.createElement('button');
        lastPageBtn.className = 'page-btn';
        lastPageBtn.textContent = totalPages;
        lastPageBtn.addEventListener('click', () => {
            currentPage = totalPages;
            renderProducts();
            scrollToTop();
        });
        pagination.appendChild(lastPageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            scrollToTop();
        }
    });
    pagination.appendChild(nextBtn);
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: document.querySelector('.products-section').offsetTop - 100,
        behavior: 'smooth'
    });
}

// Open Quick View Modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProductInModal = product;
    
    // Update modal content
    modalProductName.textContent = product.name;
    modalCategory.textContent = product.category;
    modalSubcategory.textContent = product.subcategory;
    modalBrand.textContent = product.brand;
    modalProductPrice.textContent = `PKR ${product.price.toLocaleString()}`;
    
    // Create image gallery
    modalImageGallery.innerHTML = '';
    
    // Main image
    const mainImageContainer = document.createElement('div');
    mainImageContainer.className = 'main-image-container';
    
    const mainImage = document.createElement('img');
    mainImage.src = product.mainImage;
    mainImage.alt = product.name;
    mainImage.className = 'main-image';
    mainImageContainer.appendChild(mainImage);
    modalImageGallery.appendChild(mainImageContainer);
    
    // Thumbnail images
    const thumbnailsContainer = document.createElement('div');
    thumbnailsContainer.className = 'thumbnails-container';
    
    // Add main image as first thumbnail
    const mainThumb = document.createElement('img');
    mainThumb.src = product.mainImage;
    mainThumb.alt = product.name;
    mainThumb.className = 'thumbnail active';
    mainThumb.addEventListener('click', () => {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = product.mainImage;
            mainImage.style.opacity = '1';
        }, 200);
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        mainThumb.classList.add('active');
    });
    thumbnailsContainer.appendChild(mainThumb);
    
    // Add side images as thumbnails
    product.sideImages.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = `${product.name} ${index + 1}`;
        thumb.className = 'thumbnail';
        thumb.addEventListener('click', () => {
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.src = img;
                mainImage.style.opacity = '1';
            }, 200);
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumb);
    });
    
    modalImageGallery.appendChild(thumbnailsContainer);
    
    // Update add to cart button
    const addToCartBtn = quickViewModal.querySelector('.add-to-cart');
    addToCartBtn.onclick = () => addToCart(product.id);
    
    // Update wishlist button
    const wishlistBtn = quickViewModal.querySelector('.action-btn');
    wishlistBtn.innerHTML = wishlistItems.includes(product.id) ? 
        '<i class="fas fa-heart"></i> Wishlist' : 
        '<i class="far fa-heart"></i> Wishlist';
    wishlistBtn.onclick = () => toggleWishlist(product.id);
    
    // Show modal
    quickViewModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animate modal
    setTimeout(() => {
        quickViewModal.querySelector('.modal-content').classList.add('show');
    }, 10);
}

// Close Modal
function closeModal() {
    quickViewModal.querySelector('.modal-content').classList.remove('show');
    setTimeout(() => {
        quickViewModal.style.display = 'none';
        document.body.style.overflow = '';
        currentProductInModal = null;
    }, 300);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
    
    // If modal is open, update button
    if (currentProductInModal && currentProductInModal.id === productId) {
        const btn = quickViewModal.querySelector('.add-to-cart');
        btn.innerHTML = '<i class="fas fa-check"></i> In Cart';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
        }, 2000);
    }
}

// Toggle Wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const index = wishlistItems.indexOf(productId);
    
    if (index > -1) {
        wishlistItems.splice(index, 1);
        showNotification(`${product.name} removed from wishlist!`);
    } else {
        wishlistItems.push(productId);
        showNotification(`${product.name} added to wishlist!`);
    }
    
    // Update wishlist buttons
    document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
        if (wishlistItems.includes(productId)) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
    
    // If modal is open, update button
    if (currentProductInModal && currentProductInModal.id === productId) {
        const btn = quickViewModal.querySelector('.action-btn');
        btn.innerHTML = wishlistItems.includes(productId) ? 
            '<i class="fas fa-heart"></i> Wishlist' : 
            '<i class="far fa-heart"></i> Wishlist';
    }
}

// Update Cart Count
function updateCartCount() {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
    
    // Animate cart icon
    const cartIcon = document.querySelector('.fa-shopping-bag').parentElement;
    cartIcon.classList.add('bounce');
    setTimeout(() => {
        cartIcon.classList.remove('bounce');
    }, 600);
}

// Show Notification
function showNotification(message) {
    // Remove existing notification if any
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Animate Elements
function animateElements() {
    // Animate floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const duration = 15 + index * 5;
        shape.style.animation = `float ${duration}s infinite ease-in-out`;
        shape.style.animationDelay = `${index * 2}s`;
    });
    
    // Animate hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease, transform 1s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
    
    // Animate filters section
    const filtersSection = document.querySelector('.filters-section');
    filtersSection.style.opacity = '0';
    filtersSection.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        filtersSection.style.transition = 'opacity 1s ease, transform 1s ease';
        filtersSection.style.opacity = '1';
        filtersSection.style.transform = 'translateY(0)';
    }, 300);
    
    // Animate products section
    const productsSection = document.querySelector('.products-section');
    productsSection.style.opacity = '0';
    productsSection.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        productsSection.style.transition = 'opacity 1s ease, transform 1s ease';
        productsSection.style.opacity = '1';
        productsSection.style.transform = 'translateY(0)';
    }, 500);
}

// Initialize floating particles
function initParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Add CSS animations and styles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(10deg);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes bounce {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
    
    @keyframes shimmer {
        0% {
            background-position: -200% center;
        }
        100% {
            background-position: 200% center;
        }
    }
    
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
        }
        50% {
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
        }
    }
    
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(100px) scale(1);
            opacity: 0;
        }
    }
    
    .particles-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    }
    
    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #d4af37, #f4e4bc);
        border-radius: 50%;
        animation: particleFloat 20s infinite linear;
    }
    
    .product-card {
        animation: fadeIn 0.6s ease forwards;
        opacity: 0;
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
        border: 1px solid rgba(212, 175, 55, 0.2);
    }
    
    .product-glow {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }
    
    .product-card:hover .product-glow {
        opacity: 1;
    }
    
    .product-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.3);
        border-color: rgba(212, 175, 55, 0.5);
    }
    
    .product-image-container {
        position: relative;
        overflow: hidden;
        height: 280px;
        background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
    }
    
    .product-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .product-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.8) 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    
    .product-card:hover .product-overlay {
        opacity: 1;
    }
    
    .product-card:hover .product-image {
        transform: scale(1.1) rotate(2deg);
    }
    
    .product-actions {
        position: absolute;
        top: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        opacity: 0;
        transform: translateX(30px);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .product-card:hover .product-actions {
        opacity: 1;
        transform: translateX(0);
    }
    
    .action-btn {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: linear-gradient(145deg, rgba(212, 175, 55, 0.9), rgba(212, 175, 55, 0.7));
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        color: #000;
        font-size: 16px;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    }
    
    .action-btn:hover {
        background: linear-gradient(145deg, #d4af37, #f4e4bc);
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
    }
    
    .action-btn.wishlist-btn.active {
        background: linear-gradient(145deg, #ff4d4d, #ff8080);
        color: white;
    }
    
    .product-info {
        padding: 25px;
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
    }
    
    .product-name {
        font-family: 'Cinzel', serif;
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 10px 0;
        color: #f4e4bc;
        line-height: 1.3;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .product-brand {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        gap: 8px;
    }
    
    .brand-label {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        color: rgba(212, 175, 55, 0.7);
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 300;
    }
    
    .brand-name {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        color: #d4af37;
        font-weight: 500;
        letter-spacing: 0.5px;
        position: relative;
        padding-bottom: 3px;
        transition: all 0.3s ease;
    }
    
    .brand-name::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #d4af37, #f4e4bc);
        transition: width 0.4s ease;
    }
    
    .product-card:hover .brand-name {
        color: #f4e4bc;
        transform: translateX(3px);
    }
    
    .product-card:hover .brand-name::after {
        width: 100%;
    }
    
    .product-rating {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 15px;
    }
    
    .product-rating i {
        color: #d4af37;
        font-size: 14px;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    }
    
    .rating-text {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        color: rgba(244, 228, 188, 0.7);
    }
    
    .product-price-container {
        position: relative;
        margin-bottom: 20px;
    }
    
    .product-price {
        font-family: 'Cinzel', serif;
        font-size: 24px;
        font-weight: 600;
        color: #f4e4bc;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        position: relative;
        z-index: 2;
    }
    
    .price-glow {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #d4af37, transparent);
        transform: translateY(-50%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .product-card:hover .price-glow {
        opacity: 0.5;
    }
    
    .add-to-cart-btn {
        width: 100%;
        padding: 14px 24px;
        background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%);
        color: #000;
        border: none;
        border-radius: 12px;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .btn-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s ease;
    }
    
    .add-to-cart-btn:hover .btn-shine {
        left: 100%;
    }
    
    .add-to-cart-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5);
        background: linear-gradient(135deg, #f4e4bc 0%, #d4af37 100%);
    }
    
    .add-to-cart-btn:active {
        transform: translateY(-1px);
    }
    
    .btn-icon {
        transition: transform 0.3s ease;
    }
    
    .add-to-cart-btn:hover .btn-icon {
        transform: scale(1.1) rotate(10deg);
    }
    
    .modal-content {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        border: 1px solid rgba(212, 175, 55, 0.3);
        transition: transform 0.4s ease, opacity 0.4s ease;
        transform: scale(0.9) translateY(20px);
        opacity: 0;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
    }
    
    .modal-content.show {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
    
    .notification {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
        color: #f4e4bc;
        padding: 18px 28px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.3);
        z-index: 1000;
        transform: translateY(100px) scale(0.9);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        border: 1px solid rgba(212, 175, 55, 0.3);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification i {
        color: #d4af37;
        font-size: 18px;
    }
    
    .notification.show {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    
    .bounce {
        animation: bounce 0.6s ease;
    }
    
    .thumbnail {
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        border-radius: 8px;
    }
    
    .thumbnail:hover,
    .thumbnail.active {
        opacity: 1;
        transform: scale(1.05);
        border-color: #d4af37;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
    }
    
    .page-dots {
        padding: 0 8px;
        color: rgba(212, 175, 55, 0.5);
        font-weight: 300;
    }
    
    .page-btn {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        color: #f4e4bc;
        border: 1px solid rgba(212, 175, 55, 0.3);
        padding: 10px 15px;
        margin: 0 5px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        min-width: 40px;
    }
    
    .page-btn:hover:not(:disabled) {
        background: linear-gradient(145deg, #d4af37, #f4e4bc);
        color: #000;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
    }
    
    .page-btn.active {
        background: linear-gradient(145deg, #d4af37, #f4e4bc);
        color: #000;
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
    }
    
    .page-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
    
    .grid-view {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
        transition: opacity 0.3s ease;
    }
    
    .list-view {
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: opacity 0.3s ease;
    }
    
    .list-view .product-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 200px;
    }
    
    .list-view .product-image-container {
        width: 250px;
        height: 200px;
        flex-shrink: 0;
    }
    
    .list-view .product-info {
        flex: 1;
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .list-view .add-to-cart-btn {
        width: auto;
        padding: 12px 24px;
        margin-top: 15px;
        align-self: flex-start;
    }
    
    .filters-section {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        border: 1px solid rgba(212, 175, 55, 0.2);
        transition: transform 0.3s ease;
    }
    
    .filter-select {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        color: #f4e4bc;
        border: 1px solid rgba(212, 175, 55, 0.3);
        padding: 10px 15px;
        border-radius: 8px;
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s ease;
    }
    
    .filter-select:focus {
        border-color: #d4af37;
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        outline: none;
    }
    
    .filter-select option {
        background: #1a1a1a;
        color: #f4e4bc;
    }
    
    .search-input {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        color: #f4e4bc;
        border: 1px solid rgba(212, 175, 55, 0.3);
        padding: 10px 15px;
        border-radius: 8px;
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s ease;
    }
    
    .search-input:focus {
        border-color: #d4af37;
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        outline: none;
    }
    
    .search-input::placeholder {
        color: rgba(244, 228, 188, 0.5);
    }
    
    .search-btn {
        background: linear-gradient(145deg, #d4af37, #f4e4bc);
        color: #000;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .search-btn:hover {
        background: linear-gradient(145deg, #f4e4bc, #d4af37);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
    }
    
    .view-btn {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        color: #f4e4bc;
        border: 1px solid rgba(212, 175, 55, 0.3);
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .view-btn.active {
        background: linear-gradient(145deg, #d4af37, #f4e4bc);
        color: #000;
    }
    
    .view-btn:hover {
        border-color: #d4af37;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);
// // Homepage JavaScript - Professional Gold & Black Theme with ONCE Branding

// DOM Elements - Homepage Specific
const homeNavbar = document.getElementById('navbar');
const homeNavMenu = document.getElementById('navMenu');
const homeMenuToggle = document.getElementById('menuToggle');
const homeMobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const homeCartCount = document.getElementById('cartCount');
const homeFilterBtns = document.querySelectorAll('.filter-btn');
const homeProductGrid = document.querySelector('.product-grid');
const homeNewsletterForm = document.querySelector('.newsletter-form');

// State - Homepage Specific
let homeCartItems = [];
let homeWishlistItems = [];
let homeCurrentFilter = 'all';
let homeInitialized = false;
let homeTestimonialInterval;
let homeCurrentTestimonial = 0;

// Wait for loader to complete before initializing
function waitForLoader() {
    const loader = document.getElementById('loader');
    
    if (loader && loader.style.display !== 'none') {
        setTimeout(waitForLoader, 100);
    } else {
        if (!homeInitialized) {
            homeInitialized = true;
            initializeHomepage();
        }
    }
}

// Initialize Homepage
function initializeHomepage() {
    homeSetupEventListeners();
    homeLoadProducts();
    homeInitAnimations();
    homeInitTestimonialSlideshow();
}

// Start initialization process
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(waitForLoader, 300);
});

// Also listen for loader completion event
document.addEventListener('loaderComplete', () => {
    if (!homeInitialized) {
        homeInitialized = true;
        initializeHomepage();
    }
});

// Setup Event Listeners
function homeSetupEventListeners() {
    // Mobile menu toggle
    if (homeMenuToggle) {
        homeMenuToggle.addEventListener('click', () => {
            homeNavMenu.classList.toggle('active');
            homeMobileMenuOverlay.classList.toggle('active');
            homeMenuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking overlay
    if (homeMobileMenuOverlay) {
        homeMobileMenuOverlay.addEventListener('click', () => {
            homeNavMenu.classList.remove('active');
            homeMobileMenuOverlay.classList.remove('active');
            if (homeMenuToggle) homeMenuToggle.classList.remove('active');
        });
    }
    
    // Product filters
    if (homeFilterBtns) {
        homeFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                homeFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                homeCurrentFilter = btn.dataset.filter;
                homeLoadProducts();
            });
        });
    }
    
    // Newsletter form
    if (homeNewsletterForm) {
        homeNewsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            if (email) {
                homeShowNotification('Thank you for subscribing! Check your email for a special offer.');
                e.target.reset();
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                if (homeNavMenu) homeNavMenu.classList.remove('active');
                if (homeMobileMenuOverlay) homeMobileMenuOverlay.classList.remove('active');
                if (homeMenuToggle) homeMenuToggle.classList.remove('active');
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            if (homeNavbar) homeNavbar.classList.add('scrolled');
        } else {
            if (homeNavbar) homeNavbar.classList.remove('scrolled');
        }
    });
}

// Load Products
function homeLoadProducts() {
    if (!homeProductGrid) return;
    
    homeProductGrid.innerHTML = '';
    
    const homeProducts = [
        { id: 1,
        name: "Diamond Whisper Ring",
        category: "rings",
        subcategory: "precious",
        brand: "Velisse Jewels",
        price: 98200,
        rating: 5,
        image: "https://picsum.photos/seed/diamond-ring-18k-gold/400/300",
        description: "A timeless diamond ring crafted with precision and pure brilliance.",
        features: ["18K Gold", "1.5 Carat Diamond", "Size 7", "Certified", "Lifetime Warranty"],
        mainImage: "images/EPROJECTS IMAGES/Diamond Whisper Ring (MAIN).jpg",
        sideImages: [
            "images/EPROJECTS IMAGES/Diamond Whisper Ring (HOVER).jpg"
        ]
    },
    {
        id: 2,
        name: "Eternal Radiance Necklace",
        category: "necklaces",
        subcategory: "precious",
        brand: "Crownelle",
        price: 76500,
        rating: 5,
        image: "https://picsum.photos/seed/white-gold-diamond-necklace/400/300",
        description: "An elegant necklace symbolizing eternal love and light.",
        features: ["White Gold", "2 Carat Diamonds", "18\" Length", "Clasp Lock", "Gift Box"],
        mainImage: "images/EPROJECTS IMAGES/eternal_radiance_necklace_elegant_gold_and.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/eternal_radiance_necklace_elegant_gold_and (1).jpeg"
        ]
    },
    {
        id: 3,
        name: "Ocean Bloom Earrings",
        category: "earrings",
        subcategory: "semi-precious",
        brand: "Pascal & Co.",
        price: 34200,
        rating: 4,
        image: "https://picsum.photos/seed/blue-sapphire-earrings/400/300",
        description: "Blue sapphire-inspired earrings capturing the beauty of the ocean.",
        features: ["Sapphire Stones", "Silver Setting", "Hypoallergenic", "Lightweight", "Waterproof"],
        mainImage: "images/EPROJECTS IMAGES/ocean_bloom_earrings_sapphire_blue_gemstone.jpeg",
        sideImages: [
            "images/EPROJECTS IMAGES/ocean_bloom_earrings_sapphire_blue_gemstone (1).jpeg"
         
        ]
    },
   {
    id: 4,
    name: "Graceful Halo Bracelet",
    category: "bracelets",
    subcategory: "semi-precious",
    brand: "Seraphine Jewels",
    price: 28800,
    rating: 5,
    image: "https://picsum.photos/seed/rose-gold-halo-bracelet/400/300",
    description: "Delicately crafted bracelet with a halo of charm and grace.",
    features: ["Rose Gold", "Adjustable", "7\" Length", "Secure Clasp", "Comfort Fit"],
    mainImage: "images/EPROJECTS IMAGES/graceful_halo_bracelet_stylish_silver_bracelet.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/graceful_halo_bracelet_stylish_silver_bracelet (1).jpeg"
    ]
},
{
    id: 5,
    name: "Twilight Embrace Pendant",
    category: "pendants",
    subcategory: "precious",
    brand: "Lunara Atelier",
    price: 61400,
    rating: 5,
    image: "https://picsum.photos/seed/platinum-diamond-pendant/400/300",
    description: "A pendant inspired by twilight's mysterious beauty.",
    features: ["Platinum", "Diamond Accent", "Chain Included", "Gift Box", "Certificate"],
    mainImage: "images/EPROJECTS IMAGES/twilight_embrace_pendant_luxury_pendant_inspired.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/twilight_embrace_pendant_luxury_pendant_inspired (1).jpeg"
    ]
},
{
    id: 6,
    name: "Celestial Spark Ring",
    category: "rings",
    subcategory: "precious",
    brand: "Crownelle",
    price: 72400,
    rating: 4,
    image: "https://picsum.photos/seed/yellow-gold-star-ring/400/300",
    description: "A brilliant celestial ring that glimmers like a shooting star.",
    features: ["Yellow Gold", "Star Design", "Size 6", "Engraving Available", "Custom Design"],
    mainImage: "images/EPROJECTS IMAGES/celestial_themed_gold_ring_sparkling_like_a_star.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/celestial_themed_gold_ring_sparkling_like_a_star (1).jpeg"
    ]
},
{
    id: 7,
    name: "Whispering Pearl Chain",
    category: "necklaces",
    subcategory: "semi-precious",
    brand: "Pascal & Co.",
    price: 40200,
    rating: 5,
    image: "https://picsum.photos/seed/freshwater-pearl-necklace/400/300",
    description: "Soft pearls linked with quiet sophistication.",
    features: ["Freshwater Pearls", "Silver Clasp", "16\" Length", "Classic Design", "Premium Quality"],
    mainImage: "images/EPROJECTS IMAGES/whispering_pearl_chain_soft_pearl_necklace.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/whispering_pearl_chain_soft_pearl_necklace (1).jpeg"
    ]
},
{
    id: 8,
    name: "Morning Star Earrings",
    category: "earrings",
    subcategory: "artificial",
    brand: "Velisse Jewels",
    price: 17800,
    rating: 4,
    image: "https://picsum.photos/seed/cubic-zirconia-star-earrings/400/300",
    description: "Lightweight star-shaped earrings made for daily shine.",
    features: ["Cubic Zirconia", "Silver Plated", "Post Back", "Daily Wear", "Affordable"],
    mainImage: "images/EPROJECTS IMAGES/morning_star_earrings_lightweight_star_shaped_earrings.jpeg",
    sideImages: [
        "images/EPROJECTS IMAGES/morning_star_earrings_lightweight_star_shaped_earrings (1).jpeg"
    ]
},
    ];
    
    let homeFilteredProducts = homeProducts;
    if (homeCurrentFilter !== 'all') {
        homeFilteredProducts = homeProducts.filter(product => product.categoryClass === homeCurrentFilter);
    }
    
    const homeDisplayProducts = homeFilteredProducts.slice(0, 8);
    
    homeDisplayProducts.forEach((product, index) => {
        const productCard = homeCreateProductCard(product);
        productCard.style.animationDelay = `${index * 0.1}s`;
        homeProductGrid.appendChild(productCard);
    });
    
    homeSetupProductEventListeners();
}

// Create Product Card
function homeCreateProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.categoryClass;
    
    let starsHTML = '';
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.mainImage}" alt="${product.name}" class="product-image">
            <div class="product-actions">
                <button class="product-action-btn home-wishlist-btn" data-id="${product.id}">
                    <i class="${homeWishlistItems.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <button class="product-action-btn home-view-btn" data-id="${product.id}">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="product-action-btn home-compare-btn" data-id="${product.id}">
                    <i class="fas fa-exchange-alt"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-brand">
                <span class="brand-label">by</span>
                <span class="brand-name">${product.brand}</span>
            </div>
            <div class="product-rating">
                ${starsHTML}
                <span class="rating-text">(${product.rating}.0)</span>
            </div>
            <div class="product-price-container">
                <div class="product-price">PKR ${product.price.toLocaleString()}</div>
            </div>
            <button class="product-btn home-add-to-cart-btn" data-id="${product.id}">
                <span class="btn-icon">
                    <i class="fas fa-shopping-bag"></i>
                </span>
                <span class="btn-text">Add to Cart</span>
            </button>
        </div>
    `;
    
    return card;
}

// Setup Product Event Listeners
function homeSetupProductEventListeners() {
    document.querySelectorAll('.home-wishlist-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            homeToggleWishlist(productId);
        });
    });
    
    document.querySelectorAll('.home-view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            homeViewProduct(productId);
        });
    });
    
    document.querySelectorAll('.home-compare-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            homeAddToCompare(productId);
        });
    });
    
    document.querySelectorAll('.home-add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            homeAddToCart(productId);
        });
    });
}

// Toggle Wishlist
function homeToggleWishlist(productId) {
    const index = homeWishlistItems.indexOf(productId);
    
    if (index > -1) {
        homeWishlistItems.splice(index, 1);
        homeShowNotification('Product removed from wishlist');
    } else {
        homeWishlistItems.push(productId);
        homeShowNotification('Product added to wishlist');
    }
    
    const btn = document.querySelector(`.home-wishlist-btn[data-id="${productId}"]`);
    if (btn) {
        btn.innerHTML = `<i class="${homeWishlistItems.includes(productId) ? 'fas' : 'far'} fa-heart"></i>`;
    }
}

// View Product
function homeViewProduct(productId) {
    homeShowNotification(`Viewing product #${productId}`);
}

// Add to Compare
function homeAddToCompare(productId) {
    homeShowNotification(`Product #${productId} added to compare`);
}

// Add to Cart
function homeAddToCart(productId) {
    const existingItem = homeCartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        homeCartItems.push({
            id: productId,
            quantity: 1
        });
    }
    
    homeUpdateCartCount();
    homeShowNotification('Product added to cart');
}

// Update Cart Count
function homeUpdateCartCount() {
    if (!homeCartCount) return;
    
    const count = homeCartItems.reduce((total, item) => total + item.quantity, 0);
    homeCartCount.textContent = count;
    
    const cartIcon = homeCartCount.parentElement;
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Show Notification
function homeShowNotification(message) {
    const existingNotif = document.querySelector('.home-notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'home-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Initialize Testimonial Slideshow - FIXED VERSION
function homeInitTestimonialSlideshow() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    if (!testimonialGrid) return;
    
    const testimonialData = [
        {
            name: "Rebecca Thompson",
            role: "Verified Buyer",
            avatar: "https://picsum.photos/seed/customer1/100/100.jpg",
            rating: 5,
            review: "Absolutely divine jewelry! The craftsmanship is beyond compare. Every piece feels blessed and brings such joy to my daily wear.",
            date: "1 week ago"
        },
        {
            name: "David Martinez",
            role: "Verified Buyer",
            avatar: "https://picsum.photos/seed/customer2/100/100.jpg",
            rating: 5,
            review: "PASCAL's attention to detail is heavenly. The quality is exceptional and the customer service is truly God-sent.",
            date: "2 weeks ago"
        },
        {
            name: "Grace Chen",
            role: "Verified Buyer",
            avatar: "https://picsum.photos/seed/customer3/100/100.jpg",
            rating: 4.5,
            review: "As a jewelry enthusiast, I'm impressed by PASCAL's divine designs. The pieces are both beautiful and affordable.",
            date: "3 weeks ago"
        },
        {
            name: "Michael Anderson",
            role: "Verified Buyer",
            avatar: "https://picsum.photos/seed/customer4/100/100.jpg",
            rating: 5,
            review: "The quality is heavenly! Every piece I've purchased feels like it was crafted with prayer and attention to detail.",
            date: "1 month ago"
        }
    ];
    
    // Set testimonial grid styling
    testimonialGrid.style.position = 'relative';
    testimonialGrid.style.minHeight = '350px';
    testimonialGrid.style.overflow = 'hidden';
    
    // Clear existing testimonials
    testimonialGrid.innerHTML = '';
    
    // Create testimonial cards
    testimonialData.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.style.opacity = index === 0 ? '1' : '0';
        card.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';
        card.style.position = index === 0 ? 'relative' : 'absolute';
        card.style.top = '0';
        card.style.left = '0';
        card.style.width = '100%';
        card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.pointerEvents = index === 0 ? 'auto' : 'none';
        
        // Create star rating HTML
        let starsHTML = '';
        const fullStars = Math.floor(testimonial.rating);
        const hasHalfStar = testimonial.rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        card.innerHTML = `
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="author-avatar">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
                <div class="testimonial-rating">
                    ${starsHTML}
                </div>
            </div>
            <p class="testimonial-quote">"${testimonial.review}"</p>
            <p class="testimonial-date">${testimonial.date}</p>
        `;
        
        testimonialGrid.appendChild(card);
    });
    
    // Create navigation controls
    const navControls = document.createElement('div');
    navControls.className = 'testimonial-nav';
    navControls.innerHTML = `
        <button class="testimonial-prev"><i class="fas fa-chevron-left"></i></button>
        <div class="testimonial-dots"></div>
        <button class="testimonial-next"><i class="fas fa-chevron-right"></i></button>
    `;
    testimonialGrid.appendChild(navControls);
    
    // Create dots for navigation
    const dotsContainer = navControls.querySelector('.testimonial-dots');
    testimonialData.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            homeShowTestimonial(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    // Add event listeners for navigation buttons
    navControls.querySelector('.testimonial-prev').addEventListener('click', () => {
        homeShowPrevTestimonial();
    });
    
    navControls.querySelector('.testimonial-next').addEventListener('click', () => {
        homeShowNextTestimonial();
    });
    
    // Start slideshow
    setTimeout(() => {
        homeTestimonialInterval = setInterval(() => {
            homeShowNextTestimonial();
        }, 5000);
        
        // Pause on hover
        testimonialGrid.addEventListener('mouseenter', () => {
            clearInterval(homeTestimonialInterval);
        });
        
        testimonialGrid.addEventListener('mouseleave', () => {
            homeTestimonialInterval = setInterval(() => {
                homeShowNextTestimonial();
            }, 5000);
        });
    }, 1000);
}

// Show Next Testimonial
function homeShowNextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    if (testimonials.length === 0) return;
    
    // Hide current testimonial
    testimonials[homeCurrentTestimonial].style.opacity = '0';
    testimonials[homeCurrentTestimonial].style.transform = 'translateX(-100%)';
    testimonials[homeCurrentTestimonial].style.position = 'absolute';
    testimonials[homeCurrentTestimonial].style.pointerEvents = 'none';
    
    // Update dots
    dots[homeCurrentTestimonial].classList.remove('active');
    
    // Move to next
    homeCurrentTestimonial = (homeCurrentTestimonial + 1) % testimonials.length;
    
    // Show next testimonial
    testimonials[homeCurrentTestimonial].style.opacity = '1';
    testimonials[homeCurrentTestimonial].style.transform = 'translateX(0)';
    testimonials[homeCurrentTestimonial].style.position = 'relative';
    testimonials[homeCurrentTestimonial].style.pointerEvents = 'auto';
    
    // Update dots
    dots[homeCurrentTestimonial].classList.add('active');
}

// Show Previous Testimonial
function homeShowPrevTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    if (testimonials.length === 0) return;
    
    // Hide current testimonial
    testimonials[homeCurrentTestimonial].style.opacity = '0';
    testimonials[homeCurrentTestimonial].style.transform = 'translateX(100%)';
    testimonials[homeCurrentTestimonial].style.position = 'absolute';
    testimonials[homeCurrentTestimonial].style.pointerEvents = 'none';
    
    // Update dots
    dots[homeCurrentTestimonial].classList.remove('active');
    
    // Move to previous
    homeCurrentTestimonial = (homeCurrentTestimonial - 1 + testimonials.length) % testimonials.length;
    
    // Show previous testimonial
    testimonials[homeCurrentTestimonial].style.opacity = '1';
    testimonials[homeCurrentTestimonial].style.transform = 'translateX(0)';
    testimonials[homeCurrentTestimonial].style.position = 'relative';
    testimonials[homeCurrentTestimonial].style.pointerEvents = 'auto';
    
    // Update dots
    dots[homeCurrentTestimonial].classList.add('active');
}

// Show Specific Testimonial
function homeShowTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    if (testimonials.length === 0 || index < 0 || index >= testimonials.length) return;
    
    // Hide current testimonial
    testimonials[homeCurrentTestimonial].style.opacity = '0';
    testimonials[homeCurrentTestimonial].style.position = 'absolute';
    testimonials[homeCurrentTestimonial].style.pointerEvents = 'none';
    
    // Update dots
    dots[homeCurrentTestimonial].classList.remove('active');
    
    // Set new current testimonial
    homeCurrentTestimonial = index;
    
    // Show new testimonial
    testimonials[homeCurrentTestimonial].style.opacity = '1';
    testimonials[homeCurrentTestimonial].style.transform = 'translateX(0)';
    testimonials[homeCurrentTestimonial].style.position = 'relative';
    testimonials[homeCurrentTestimonial].style.pointerEvents = 'auto';
    
    // Update dots
    dots[homeCurrentTestimonial].classList.add('active');
}

// Initialize Gentle Animations
function homeInitAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('home-animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card, .category-card, .feature-card').forEach(el => {
        observer.observe(el);
    });
}

// Add Professional ONCE Branding CSS
const homeStyle = document.createElement('style');
homeStyle.textContent = `
    /* ONCE Branding */
    .logo {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        letter-spacing: 3px;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        text-transform: uppercase;
    }
    
    .nav-link {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    
    .nav-link:hover {
        color: #f4e4bc;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
    }
    
    .section-title {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #d4af37;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }
    
    .product-name {
        font-family: 'Cinzel', serif;
        font-weight: 600;
        color: #f4e4bc;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }
    
    .brand-name {
        color: #d4af37;
        font-weight: 600;
        text-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
    }
    
    .testimonial-header h4 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        color: #f4e4bc;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
    }
    
    /* Professional Notifications */
    .home-notification {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
        color: #d4af37;
        padding: 20px 30px;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        z-index: 1000;
        transform: translateY(100px) scale(0.9);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 500;
        max-width: 320px;
        border: 2px solid #d4af37;
        box-shadow: inset 0 0 0 1px rgba(212, 175, 55, 0.3);
    }
    
    .home-notification.show {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    
    /* Gold & Black Theme - Product Cards */
    .product-card {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        border-radius: 16px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 2px solid transparent;
        background-clip: padding-box;
        position: relative;
        overflow: hidden;
    }
    
    .product-card::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #d4af37, #f4e4bc, #d4af37);
        border-radius: 16px;
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: -1;
    }
    
    .product-card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.1), transparent);
        border-radius: 16px;
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: -1;
    }
    
    .product-card:hover::before {
        opacity: 0.15;
    }
    
    .product-card:hover::after {
        opacity: 1;
    }
    
    .product-card:hover {
        transform: translateY(-12px) scale(1.03);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 50px rgba(212, 175, 55, 0.3);
        border-color: #d4af37;
    }
    
    .product-card:hover .product-image {
        transform: scale(1.1);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        filter: brightness(1.2);
    }
    
    /* Product Info */
    .product-rating i {
        color: #d4af37;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        transition: all 0.3s ease;
    }
    
    .product-card:hover .product-rating i {
        transform: scale(1.2);
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
    }
    
    .product-price {
        color: #f4e4bc;
        font-size: 24px;
        font-weight: 700;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        transition: all 0.3s ease;
    }
    
    .product-card:hover .product-price {
        transform: scale(1.05);
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
    }
    
    /* Product Actions */
    .product-actions {
        opacity: 0;
        transform: translateY(15px);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .product-card:hover .product-actions {
        opacity: 1;
        transform: translateY(0);
    }
    
    .product-action-btn {
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        background: rgba(212, 175, 55, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(212, 175, 55, 0.4);
    }
    
    .product-action-btn:hover {
        background: rgba(212, 175, 55, 0.4);
        transform: scale(1.15) rotate(5deg);
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
        border-color: #d4af37;
    }
    
    /* Add to Cart Button */
    .product-btn {
        background: linear-gradient(135deg, #d4af37, #f4e4bc);
        color: #0a0a0a;
        border: 2px solid #d4af37;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    }
    
    .product-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s ease;
    }
    
    .product-btn:hover::before {
        left: 100%;
    }
    
    .product-btn:hover {
        background: linear-gradient(135deg, #f4e4bc, #d4af37);
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5);
        border-color: #f4e4bc;
    }
    
    /* Professional Testimonial Slideshow - FIXED */
    .testimonial-grid {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 30px;
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        border: 2px solid rgba(212, 175, 55, 0.3);
        overflow: hidden;
    }
    
    .testimonial-card {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        border-radius: 16px;
        padding: 35px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        border: 2px solid rgba(212, 175, 55, 0.3);
        width: 100%;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        gap: 20px;
    }
    
    .author-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #d4af37;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        transition: all 0.3s ease;
    }
    
    .testimonial-card:hover .author-avatar {
        transform: scale(1.1);
        box-shadow: 0 0 25px rgba(212, 175, 55, 0.6);
    }
    
    .author-info h4 {
        margin: 0 0 8px 0;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #f4e4bc;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
    }
    
    .author-info p {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        color: #d4af37;
        opacity: 0.9;
        font-weight: 500;
    }
    
    .testimonial-rating {
        margin-left: auto;
        color: #d4af37;
        text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        font-size: 18px;
    }
    
    .testimonial-quote {
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
        line-height: 1.7;
        color: #f4e4bc;
        margin-bottom: 20px;
        font-style: italic;
        position: relative;
        padding-left: 30px;
        border-left: 3px solid #d4af37;
    }
    
    .testimonial-quote::before {
        content: '"';
        position: absolute;
        left: 0;
        top: -10px;
        font-size: 60px;
        color: rgba(212, 175, 55, 0.3);
        font-family: 'Georgia', serif;
    }
    
    .testimonial-date {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        color: #d4af37;
        opacity: 0.8;
        text-align: right;
        margin: 0;
        font-weight: 500;
    }
    
    /* Testimonial Navigation Controls */
    .testimonial-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        position: relative;
    }
    
    .testimonial-prev, .testimonial-next {
        background: rgba(212, 175, 55, 0.2);
        border: 1px solid rgba(212, 175, 55, 0.4);
        color: #d4af37;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 10;
    }
    
    .testimonial-prev:hover, .testimonial-next:hover {
        background: rgba(212, 175, 55, 0.4);
        transform: scale(1.1);
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.6);
    }
    
    .testimonial-dots {
        display: flex;
        gap: 8px;
    }
    
    .testimonial-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(212, 175, 55, 0.3);
        border: 1px solid rgba(212, 175, 55, 0.5);
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .testimonial-dot.active {
        background: #d4af37;
        transform: scale(1.2);
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
    }
    
    /* Category Cards */
    .category-card, .feature-card {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 2px solid rgba(212, 175, 55, 0.3);
    }
    
    .category-card:hover, .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 35px rgba(212, 175, 55, 0.3);
        border-color: rgba(212, 175, 55, 0.5);
    }
    
    /* Navbar */
    .navbar.scrolled {
        background: linear-gradient(145deg, rgba(10, 10, 10, 0.98), rgba(26, 26, 26, 0.98));
        backdrop-filter: blur(15px);
        box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3);
        border-bottom: 2px solid rgba(212, 175, 55, 0.3);
    }
    
    /* Footer */
    .footer {
        background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
        border-top: 2px solid rgba(212, 175, 55, 0.3);
    }
    
    .footer-brand h3 {
        color: #d4af37;
        font-family: 'Cinzel', serif;
        font-weight: 700;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
    }
    
    .footer-section h4 {
        color: #f4e4bc;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }
    
    .footer-section a {
        color: #f4e4bc;
        transition: all 0.3s ease;
    }
    
    .footer-section a:hover {
        color: #f4e4bc;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
    }
    
    /* Gentle Fade In Animation */
    .home-animate {
        opacity: 0;
        transform: translateY(30px);
        animation: homeFadeIn 0.8s ease forwards;
    }
    
    @keyframes homeFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Staggered Animation */
    .product-card:nth-child(1) { animation-delay: 0s; }
    .product-card:nth-child(2) { animation-delay: 0.1s; }
    .product-card:nth-child(3) { animation-delay: 0.2s; }
    .product-card:nth-child(4) { animation-delay: 0.3s; }
    .product-card:nth-child(5) { animation-delay: 0.4s; }
    .product-card:nth-child(6) { animation-delay: 0.5s; }
    .product-card:nth-child(7) { animation-delay: 0.6s; }
    .product-card:nth-child(8) { animation-delay: 0.7s; }
`;
document.head.appendChild(homeStyle);
// Royal Gallery JavaScript - LUXE FUTURE


// DOM Elements - All Unique Variable Names
// DOM Element References
const mainProductGridContainer = document.getElementById('productsGrid');
const productSelectionCounterDisplay = document.getElementById('selectedCount');
const clearAllSelectionsButton = document.getElementById('clearBtn');
const startProductComparisonButton = document.getElementById('compareBtn');
const productCategoryFilterDropdown = document.getElementById('categoryFilter');
const productBrandFilterDropdown = document.getElementById('brandFilter');
const productComparisonModalDialog = document.getElementById('comparisonModal');
const closeComparisonModalButton = document.getElementById('closeModal');
const productImageGalleryModalDialog = document.getElementById('imageGalleryModal');
const closeImageGalleryModalButton = document.getElementById('galleryClose');
const mainGalleryImageDisplay = document.getElementById('galleryMainImage');
const globalUserNotificationBox = document.getElementById('notification');

// Application State Variables
let currentlySelectedProductsArray = [];
let filteredProductsDisplayArray = [...products];
let currentViewportWidth = window.innerWidth;
let currentViewportHeight = window.innerHeight;
let isMobileDeviceViewport = false;
let isTabletDeviceViewport = false;
let isDesktopDeviceViewport = false;
let currentBreakpoint = '';
let resizeTimeoutIdentifier = null;

// Responsive Breakpoints Configuration
const responsiveBreakpointsConfig = {
    mobile: { max: 767, name: 'mobile' },
    tablet: { min: 768, max: 1023, name: 'tablet' },
    desktop: { min: 1024, name: 'desktop' }
};

// CSS Classes for Different Viewports
const viewportCSSClasses = {
    mobile: {
        productsGrid: 'products-grid-mobile',
        productCard: 'product-card-mobile',
        comparisonTable: 'comparison-table-mobile',
        modalContent: 'modal-content-mobile'
    },
    tablet: {
        productsGrid: 'products-grid-tablet',
        productCard: 'product-card-tablet',
        comparisonTable: 'comparison-table-tablet',
        modalContent: 'modal-content-tablet'
    },
    desktop: {
        productsGrid: 'products-grid-desktop',
        productCard: 'product-card-desktop',
        comparisonTable: 'comparison-table-desktop',
        modalContent: 'modal-content-desktop'
    }
};

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeResponsiveSystem();
    renderProductsInGrid(products);
    setupAllApplicationEventListeners();
    createResponsiveStyles();
});

// Initialize responsive system
function initializeResponsiveSystem() {
    updateViewportState();
    setupResizeEventHandlers();
    applyViewportSpecificStyles();
}

// Update viewport state based on current dimensions
function updateViewportState() {
    currentViewportWidth = window.innerWidth;
    currentViewportHeight = window.innerHeight;
    
    // Determine current breakpoint with proper boundaries
    if (currentViewportWidth <= responsiveBreakpointsConfig.mobile.max) {
        isMobileDeviceViewport = true;
        isTabletDeviceViewport = false;
        isDesktopDeviceViewport = false;
        currentBreakpoint = 'mobile';
    } else if (currentViewportWidth >= responsiveBreakpointsConfig.tablet.min && 
               currentViewportWidth <= responsiveBreakpointsConfig.tablet.max) {
        isMobileDeviceViewport = false;
        isTabletDeviceViewport = true;
        isDesktopDeviceViewport = false;
        currentBreakpoint = 'tablet';
    } else {
        isMobileDeviceViewport = false;
        isTabletDeviceViewport = false;
        isDesktopDeviceViewport = true;
        currentBreakpoint = 'desktop';
    }
    
    // Update body class for CSS targeting
    document.body.className = `viewport-${currentBreakpoint}`;
}

// Setup resize event handlers with debouncing
function setupResizeEventHandlers() {
    window.addEventListener('resize', handleViewportResize);
    window.addEventListener('orientationchange', handleOrientationChange);
}

// Handle viewport resize with debouncing
function handleViewportResize() {
    clearTimeout(resizeTimeoutIdentifier);
    resizeTimeoutIdentifier = setTimeout(() => {
        const previousBreakpoint = currentBreakpoint;
        updateViewportState();
        
        if (previousBreakpoint !== currentBreakpoint) {
            onBreakpointChange(previousBreakpoint, currentBreakpoint);
        }
        
        updateProductsGridLayout();
        
        // Update comparison table if modal is open
        if (productComparisonModalDialog.style.display === 'block') {
            generateComparisonTable();
        }
    }, 250);
}

// Handle orientation change
function handleOrientationChange() {
    setTimeout(() => {
        updateViewportState();
        applyViewportSpecificStyles();
        updateProductsGridLayout();
    }, 100);
}

// Handle breakpoint changes
function onBreakpointChange(oldBreakpoint, newBreakpoint) {
    console.log(`Breakpoint changed from ${oldBreakpoint} to ${newBreakpoint}`);
    
    // Remove old breakpoint classes
    document.body.classList.remove(`viewport-${oldBreakpoint}`);
    
    // Add new breakpoint classes
    document.body.classList.add(`viewport-${newBreakpoint}`);
    
    // Re-render products with new layout
    renderProductsInGrid(filteredProductsDisplayArray);
    
    // Show notification for significant breakpoint changes
    if (isMobileDeviceViewport) {
        showUserNotificationMessage('Switched to mobile view', 'info');
    } else if (isDesktopDeviceViewport) {
        showUserNotificationMessage('Switched to desktop view', 'info');
    }
}

// Create responsive styles dynamically
function createResponsiveStyles() {
    // Remove existing styles if any
    const existingStyles = document.getElementById('responsive-styles');
    if (existingStyles) {
        existingStyles.remove();
    }
    
    const responsiveStyleSheet = document.createElement('style');
    responsiveStyleSheet.id = 'responsive-styles';
    responsiveStyleSheet.textContent = generateResponsiveCSS();
    document.head.appendChild(responsiveStyleSheet);
}

// Generate responsive CSS with Gold and Black theme
function generateResponsiveCSS() {
    return `
        /* Base Responsive Classes */
        .viewport-mobile body {
            font-size: 14px;
        }
        
        .viewport-tablet body {
            font-size: 15px;
        }
        
        .viewport-desktop body {
            font-size: 16px;
        }
        
        /* Mobile Specific Styles */
        .products-grid-mobile {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 15px !important;
            padding: 10px !important;
        }
        
        .product-card-mobile {
            max-width: 100% !important;
            margin: 0 auto !important;
        }
        
        .product-card-mobile .product-image-container {
            height: 180px !important;
        }
        
        .product-card-mobile .product-info {
            padding: 15px !important;
        }
        
        .product-card-mobile .product-name {
            font-size: 1rem !important;
        }
        
        .product-card-mobile .product-price {
            font-size: 1.1rem !important;
        }
        
        /* Gold and Black Comparison Table Theme */
        .comparison-table-container {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            width: 100% !important;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
            border-radius: 12px !important;
            padding: 20px !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
        }
        
        .comparison-table {
            width: 100% !important;
            border-collapse: separate !important;
            border-spacing: 0 !important;
            margin: 0 !important;
            background: #000 !important;
            border-radius: 8px !important;
            overflow: hidden !important;
        }
        
        .comparison-table th,
        .comparison-table td {
            padding: 14px 10px !important;
            text-align: left !important;
            border-bottom: 1px solid rgba(255, 215, 0, 0.3) !important;
            vertical-align: top !important;
            color: #fff !important;
            font-weight: 400 !important;
        }
        
        .comparison-table th {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%) !important;
            color: #000 !important;
            font-weight: bold !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 10 !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
            font-size: 0.95rem !important;
        }
        
        .comparison-table .feature-label {
            background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%) !important;
            color: #FFD700 !important;
            font-weight: bold !important;
            min-width: 120px !important;
            position: sticky !important;
            left: 0 !important;
            z-index: 5 !important;
            border-right: 2px solid #FFD700 !important;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5) !important;
        }
        
        .comparison-product-header {
            text-align: center !important;
            padding: 10px !important;
            background: rgba(255, 215, 0, 0.1) !important;
        }
        
        .comparison-product-header img {
            width: 80px !important;
            height: 80px !important;
            object-fit: cover !important;
            border-radius: 8px !important;
            margin-bottom: 10px !important;
            border: 2px solid #FFD700 !important;
            box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3) !important;
        }
        
        .comparison-product-header h3 {
            margin: 5px 0 !important;
            font-size: 1rem !important;
            color: #FFD700 !important;
            font-weight: bold !important;
        }
        
        .comparison-product-price {
            font-weight: bold !important;
            color: #FFD700 !important;
            font-size: 1.1rem !important;
            text-shadow: 0 0 8px rgba(255, 215, 0, 0.6) !important;
        }
        
        .comparison-table tr:nth-child(even) td:not(.feature-label) {
            background: rgba(255, 215, 0, 0.05) !important;
        }
        
        .comparison-table tr:hover td:not(.feature-label) {
            background: rgba(255, 215, 0, 0.15) !important;
            transition: background 0.3s ease !important;
        }
        
        .comparison-table td ul {
            color: #fff !important;
            margin: 0 !important;
            padding-left: 20px !important;
        }
        
        .comparison-table td ul li {
            margin-bottom: 5px !important;
            color: #e0e0e0 !important;
        }
        
        .modal-content-mobile {
            width: 95% !important;
            margin: 10px auto !important;
            padding: 10px !important;
            max-height: 90vh !important;
            overflow-y: auto !important;
            box-sizing: border-box !important;
            background: #000 !important;
        }
        
        /* Tablet Specific Styles */
        .products-grid-tablet {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding: 15px !important;
        }
        
        .product-card-tablet {
            max-width: 100% !important;
        }
        
        .product-card-tablet .product-image-container {
            height: 200px !important;
        }
        
        .comparison-table-tablet {
            font-size: 0.95rem !important;
        }
        
        .comparison-table-tablet th,
        .comparison-table-tablet td {
            padding: 16px 12px !important;
        }
        
        .comparison-table-tablet .comparison-product-header h3 {
            font-size: 1.1rem !important;
        }
        
        .modal-content-tablet {
            width: 90% !important;
            margin: 20px auto !important;
            padding: 15px !important;
            max-height: 85vh !important;
            overflow-y: auto !important;
            background: #000 !important;
        }
        
        /* Desktop Specific Styles */
        .products-grid-desktop {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            gap: 30px !important;
            padding: 20px !important;
        }
        
        .product-card-desktop {
            transition: all 0.3s ease !important;
        }
        
        .product-card-desktop:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2) !important;
        }
        
        .comparison-table-desktop {
            font-size: 1rem !important;
        }
        
        .comparison-table-desktop th,
        .comparison-table-desktop td {
            padding: 18px 14px !important;
        }
        
        .comparison-table-desktop .comparison-product-header h3 {
            font-size: 1.2rem !important;
        }
        
        .comparison-table-desktop .comparison-product-price {
            font-size: 1.3rem !important;
        }
        
        .modal-content-desktop {
            width: 85% !important;
            max-width: 1200px !important;
            margin: 30px auto !important;
            padding: 20px !important;
            background: #000 !important;
        }
        
        /* Responsive Navigation */
        @media (max-width: 767px) {
            .navbar-container {
                padding: 0 15px !important;
            }
            
            .logo {
                font-size: 1.5rem !important;
            }
            
            .comparison-bar-container {
                flex-direction: column !important;
                gap: 15px !important;
                padding: 15px !important;
            }
            
            .comparison-actions {
                width: 100% !important;
                justify-content: center !important;
            }
            
            .filters-container {
                flex-direction: column !important;
                align-items: center !important;
            }
            
            .filter-select {
                width: 100% !important;
                max-width: 300px !important;
            }
            
            .comparison-table {
                min-width: 600px !important;
            }
            
            .comparison-product-header h3 {
                font-size: 0.9rem !important;
            }
            
            .comparison-table th,
            .comparison-table td {
                padding: 12px 8px !important;
            }
        }
        
        /* Responsive Hero Section */
        @media (max-width: 767px) {
            .hero h1 {
                font-size: 2rem !important;
            }
            
            .hero p {
                font-size: 1rem !important;
            }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
            .hero h1 {
                font-size: 2.5rem !important;
            }
            
            .comparison-table {
                min-width: 700px !important;
            }
        }
        
        @media (min-width: 1024px) {
            .comparison-table {
                min-width: 800px !important;
            }
        }
        
        /* Responsive Gallery */
        @media (max-width: 767px) {
            .gallery-image-container {
                width: 100% !important;
                height: 60vh !important;
            }
            
            .gallery-main-image {
                width: 100% !important;
                height: 100% !important;
                object-fit: contain !important;
            }
        }
        
        /* Responsive Notifications */
        @media (max-width: 767px) {
            .notification {
                width: 90% !important;
                left: 5% !important;
                right: 5% !important;
                bottom: 20px !important;
                font-size: 0.9rem !important;
            }
        }
        
        /* Hide elements on mobile */
        @media (max-width: 767px) {
            .desktop-only {
                display: none !important;
            }
        }
        
        /* Show elements only on mobile */
        @media (min-width: 768px) {
            .mobile-only {
                display: none !important;
            }
        }
        
        /* Gold and Black Modal Theme */
        .comparison-modal-content {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
            border: 2px solid #FFD700 !important;
            border-radius: 12px !important;
            box-shadow: 0 20px 60px rgba(255, 215, 0, 0.3) !important;
        }
        
        .comparison-modal-content h2 {
            color: #FFD700 !important;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.5) !important;
            text-align: center !important;
            margin-bottom: 20px !important;
        }
        
        /* Scrollbar Styling */
        .comparison-table-container::-webkit-scrollbar {
            height: 8px !important;
        }
        
        .comparison-table-container::-webkit-scrollbar-track {
            background: #1a1a1a !important;
            border-radius: 4px !important;
        }
        
        .comparison-table-container::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%) !important;
            border-radius: 4px !important;
        }
        
        .comparison-table-container::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #FFA500 0%, #FFD700 100%) !important;
        }
    `;
}

// Apply viewport-specific styles
function applyViewportSpecificStyles() {
    // Remove all viewport classes
    mainProductGridContainer.className = 'products-grid';
    
    // Add current viewport class
    mainProductGridContainer.classList.add(viewportCSSClasses[currentBreakpoint].productsGrid);
    
    // Update modal content if it exists
    const modalContent = document.querySelector('.comparison-modal-content');
    if (modalContent) {
        modalContent.className = 'comparison-modal-content';
        modalContent.classList.add(viewportCSSClasses[currentBreakpoint].modalContent);
    }
}

// Update products grid layout
function updateProductsGridLayout() {
    const gridElement = mainProductGridContainer;
    
    // Remove all grid classes
    gridElement.className = 'products-grid';
    
    // Add appropriate grid class based on viewport
    if (isMobileDeviceViewport) {
        gridElement.classList.add('products-grid-mobile');
        gridElement.style.gridTemplateColumns = '1fr';
    } else if (isTabletDeviceViewport) {
        gridElement.classList.add('products-grid-tablet');
        gridElement.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        gridElement.classList.add('products-grid-desktop');
        gridElement.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    }
    
    // Adjust gap based on viewport
    if (isMobileDeviceViewport) {
        gridElement.style.gap = '15px';
    } else if (isTabletDeviceViewport) {
        gridElement.style.gap = '20px';
    } else {
        gridElement.style.gap = '30px';
    }
}

// Setup all application event listeners
function setupAllApplicationEventListeners() {
    // Clear selections button handler
    clearAllSelectionsButton.addEventListener('click', clearAllProductSelections);
    
    // Start comparison button handler
    startProductComparisonButton.addEventListener('click', openProductComparisonModal);
    
    // Close comparison modal button handler
    closeComparisonModalButton.addEventListener('click', closeProductComparisonModal);
    
    // Filter dropdown change handlers
    productCategoryFilterDropdown.addEventListener('change', applyProductFilters);
    productBrandFilterDropdown.addEventListener('change', applyProductFilters);
    
    // Close gallery modal button handler
    closeImageGalleryModalButton.addEventListener('click', closeProductImageGalleryModal);
    
    // Window click handlers for modal closing
    window.addEventListener('click', (windowClickEvent) => {
        if (windowClickEvent.target === productComparisonModalDialog) {
            closeProductComparisonModal();
        }
        if (windowClickEvent.target === productImageGalleryModalDialog) {
            closeProductImageGalleryModal();
        }
    });
}

// Render products in the main grid
function renderProductsInGrid(productsToRenderArray) {
    mainProductGridContainer.innerHTML = '';
    
    if (productsToRenderArray.length === 0) {
        mainProductGridContainer.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
        return;
    }
    
    productsToRenderArray.forEach(singleProductItem => {
        const productCardHTMLElement = createProductCardHTMLElement(singleProductItem);
        mainProductGridContainer.appendChild(productCardHTMLElement);
    });
    
    // Apply current viewport styles to cards
    applyViewportStylesToProductCards();
}

// Apply viewport styles to product cards
function applyViewportStylesToProductCards() {
    const allProductCards = document.querySelectorAll('.product-card');
    
    allProductCards.forEach(cardElement => {
        // Remove all viewport classes
        cardElement.classList.remove('product-card-mobile', 'product-card-tablet', 'product-card-desktop');
        
        // Add current viewport class
        cardElement.classList.add(viewportCSSClasses[currentBreakpoint].productCard);
        
        // Adjust card properties based on viewport
        if (isMobileDeviceViewport) {
            adjustCardForMobile(cardElement);
        } else if (isTabletDeviceViewport) {
            adjustCardForTablet(cardElement);
        } else {
            adjustCardForDesktop(cardElement);
        }
    });
}

// Adjust card for mobile viewport
function adjustCardForMobile(cardElement) {
    const imageContainer = cardElement.querySelector('.product-image-container');
    const productName = cardElement.querySelector('.product-name');
    const productPrice = cardElement.querySelector('.product-price');
    
    if (imageContainer) imageContainer.style.height = '180px';
    if (productName) productName.style.fontSize = '1rem';
    if (productPrice) productPrice.style.fontSize = '1.1rem';
}

// Adjust card for tablet viewport
function adjustCardForTablet(cardElement) {
    const imageContainer = cardElement.querySelector('.product-image-container');
    const productName = cardElement.querySelector('.product-name');
    const productPrice = cardElement.querySelector('.product-price');
    
    if (imageContainer) imageContainer.style.height = '200px';
    if (productName) productName.style.fontSize = '1.1rem';
    if (productPrice) productPrice.style.fontSize = '1.2rem';
}

// Adjust card for desktop viewport
function adjustCardForDesktop(cardElement) {
    const imageContainer = cardElement.querySelector('.product-image-container');
    const productName = cardElement.querySelector('.product-name');
    const productPrice = cardElement.querySelector('.product-price');
    
    if (imageContainer) imageContainer.style.height = '220px';
    if (productName) productName.style.fontSize = '1.2rem';
    if (productPrice) productPrice.style.fontSize = '1.3rem';
}

// Create individual product card HTML element
function createProductCardHTMLElement(productData) {
    const cardDivElement = document.createElement('div');
    cardDivElement.className = 'product-card';
    cardDivElement.dataset.id = productData.id;
    
    // Check if product is currently selected
    const productIsSelected = currentlySelectedProductsArray.some(p => p.id === productData.id);
    if (productIsSelected) {
        cardDivElement.classList.add('selected');
    }
    
    cardDivElement.innerHTML = `
        <div class="product-image-container">
            <img src="${productData.mainImage}" alt="${productData.name}" class="product-image">
            <div class="product-overlay">
                <button class="view-images-btn" data-id="${productData.id}">
                    <i class="fas fa-images"></i>
                </button>
            </div>
            <div class="product-checkbox">
                <input type="checkbox" id="select-${productData.id}" ${productIsSelected ? 'checked' : ''}>
                <label for="select-${productData.id}"></label>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${productData.name}</h3>
            <div class="product-meta">
                <span class="product-brand">${productData.brand}</span>
                <span class="product-category">${productData.category}</span>
            </div>
            <div class="product-rating">
                ${generateStarRatingHTMLString(productData.rating)}
            </div>
            <p class="product-price">PKR ${productData.price.toLocaleString()}</p>
        </div>
    `;
    
    // Add click event for product selection
    cardDivElement.addEventListener('click', (cardClickEvent) => {
        // Prevent selection when clicking view images button
        if (cardClickEvent.target.closest('.view-images-btn')) {
            cardClickEvent.stopPropagation();
            openProductImageGalleryModal(productData);
            return;
        }
        
        toggleProductSelectionState(productData);
    });
    
    return cardDivElement;
}

// Generate star rating HTML string
function generateStarRatingHTMLString(ratingNumber) {
    let generatedStarsHTML = '';
    for (let currentStarIndex = 1; currentStarIndex <= 5; currentStarIndex++) {
        if (currentStarIndex <= ratingNumber) {
            generatedStarsHTML += '<i class="fas fa-star"></i>';
        } else {
            generatedStarsHTML += '<i class="far fa-star"></i>';
        }
    }
    return generatedStarsHTML;
}

// Toggle product selection state
function toggleProductSelectionState(productToToggle) {
    const productSelectionIndex = currentlySelectedProductsArray.findIndex(p => p.id === productToToggle.id);
    const productCardElement = document.querySelector(`.product-card[data-id="${productToToggle.id}"]`);
    const productCheckboxElement = document.getElementById(`select-${productToToggle.id}`);
    
    if (productSelectionIndex !== -1) {
        // Remove product from selection
        currentlySelectedProductsArray.splice(productSelectionIndex, 1);
        productCardElement.classList.remove('selected');
        productCheckboxElement.checked = false;
    } else {
        // Check maximum selection limit
        if (currentlySelectedProductsArray.length >= 4) {
            showUserNotificationMessage('You can only compare up to 4 products at a time.', 'warning');
            return;
        }
        
        // Add product to selection
        currentlySelectedProductsArray.push(productToToggle);
        productCardElement.classList.add('selected');
        productCheckboxElement.checked = true;
    }
    
    updateSelectionUIElements();
}

// Update selection UI elements
function updateSelectionUIElements() {
    productSelectionCounterDisplay.textContent = `${currentlySelectedProductsArray.length} products selected`;
    
    // Enable/disable compare button
    if (currentlySelectedProductsArray.length >= 2) {
        startProductComparisonButton.disabled = false;
    } else {
        startProductComparisonButton.disabled = true;
    }
    
    // Enable/disable clear button
    if (currentlySelectedProductsArray.length > 0) {
        clearAllSelectionsButton.disabled = false;
    } else {
        clearAllSelectionsButton.disabled = true;
    }
}

// Clear all product selections
function clearAllProductSelections() {
    currentlySelectedProductsArray = [];
    
    // Update all product cards
    document.querySelectorAll('.product-card').forEach(cardElement => {
        cardElement.classList.remove('selected');
        const cardProductId = cardElement.dataset.id;
        const cardCheckboxElement = document.getElementById(`select-${cardProductId}`);
        if (cardCheckboxElement) cardCheckboxElement.checked = false;
    });
    
    updateSelectionUIElements();
    showUserNotificationMessage('All selections cleared', 'info');
}

// Apply product filters
function applyProductFilters() {
    const selectedCategoryFilterValue = productCategoryFilterDropdown.value;
    const selectedBrandFilterValue = productBrandFilterDropdown.value;
    
    filteredProductsDisplayArray = products.filter(singleProductItem => {
        const categoryFilterMatches = selectedCategoryFilterValue === 'all' || singleProductItem.category === selectedCategoryFilterValue;
        const brandFilterMatches = selectedBrandFilterValue === 'all' || singleProductItem.brand === selectedBrandFilterValue;
        return categoryFilterMatches && brandFilterMatches;
    });
    
    renderProductsInGrid(filteredProductsDisplayArray);
}

// Open product comparison modal
function openProductComparisonModal() {
    if (currentlySelectedProductsArray.length < 2) {
        showUserNotificationMessage('Please select at least 2 products to compare', 'warning');
        return;
    }
    
    generateComparisonTable();
    productComparisonModalDialog.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Apply viewport-specific modal styles
    applyModalStylesForViewport();
}

// Apply modal styles based on viewport
function applyModalStylesForViewport() {
    const modalContent = document.querySelector('.comparison-modal-content');
    if (!modalContent) return;
    
    // Remove all viewport classes
    modalContent.classList.remove('modal-content-mobile', 'modal-content-tablet', 'modal-content-desktop');
    
    // Add current viewport class
    modalContent.classList.add(viewportCSSClasses[currentBreakpoint].modalContent);
    
    // Apply viewport-specific styles
    if (isMobileDeviceViewport) {
        modalContent.style.width = '95%';
        modalContent.style.margin = '10px auto';
        modalContent.style.padding = '10px';
        modalContent.style.maxHeight = '90vh';
        modalContent.style.overflowY = 'auto';
    } else if (isTabletDeviceViewport) {
        modalContent.style.width = '90%';
        modalContent.style.margin = '20px auto';
        modalContent.style.padding = '15px';
        modalContent.style.maxHeight = '85vh';
        modalContent.style.overflowY = 'auto';
    } else {
        modalContent.style.width = '85%';
        modalContent.style.maxWidth = '1200px';
        modalContent.style.margin = '30px auto';
        modalContent.style.padding = '20px';
    }
}

// Close product comparison modal
function closeProductComparisonModal() {
    productComparisonModalDialog.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Generate comparison table for all viewports
function generateComparisonTable() {
    const comparisonTableElement = document.getElementById('comparisonTable');
    
    if (!comparisonTableElement) return;
    
    // Clear existing content
    comparisonTableElement.innerHTML = '';
    
    // Add appropriate class based on viewport
    comparisonTableElement.className = 'comparison-table';
    if (isMobileDeviceViewport) {
        comparisonTableElement.classList.add('comparison-table-mobile');
    } else if (isTabletDeviceViewport) {
        comparisonTableElement.classList.add('comparison-table-tablet');
    } else {
        comparisonTableElement.classList.add('comparison-table-desktop');
    }
    
    // Create table header
    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.innerHTML = '<th class="feature-label">Feature</th>';
    
    currentlySelectedProductsArray.forEach(selectedProduct => {
        const headerCellElement = document.createElement('th');
        headerCellElement.innerHTML = `
            <div class="comparison-product-header">
                <img src="${selectedProduct.mainImage}" alt="${selectedProduct.name}">
                <h3>${selectedProduct.name}</h3>
                <div class="comparison-product-price">PKR ${selectedProduct.price.toLocaleString()}</div>
            </div>
        `;
        tableHeaderRow.appendChild(headerCellElement);
    });
    
    comparisonTableElement.appendChild(tableHeaderRow);
    
    // Define comparison features
    const comparisonFeaturesList = [
        { label: 'Brand', key: 'brand' },
        { label: 'Category', key: 'category' },
        { label: 'Price', key: 'price', format: (value) => `₹${value.toLocaleString()}` },
        { label: 'Rating', key: 'rating', format: (value) => generateStarRatingHTMLString(value) },
        { label: 'Description', key: 'description' },
        { label: 'Features', key: 'features', format: (value) => `<ul style="margin: 0; padding-left: 20px;">${value.map(f => `<li>${f}</li>`).join('')}</ul>` }
    ];
    
    // Create feature rows
    comparisonFeaturesList.forEach(featureObject => {
        const featureRowElement = document.createElement('tr');
        featureRowElement.innerHTML = `<td class="feature-label">${featureObject.label}</td>`;
        
        currentlySelectedProductsArray.forEach(selectedProduct => {
            const dataCellElement = document.createElement('td');
            const productValue = selectedProduct[featureObject.key];
            
            if (featureObject.format) {
                dataCellElement.innerHTML = featureObject.format(productValue);
            } else {
                dataCellElement.textContent = productValue;
            }
            
            featureRowElement.appendChild(dataCellElement);
        });
        
        comparisonTableElement.appendChild(featureRowElement);
    });
}

// Open product image gallery modal
function openProductImageGalleryModal(productData) {
    // Implementation for image gallery modal
    // This would show a gallery of product images
    mainGalleryImageDisplay.src = productData.mainImage;
    productImageGalleryModalDialog.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close product image gallery modal
function closeProductImageGalleryModal() {
    productImageGalleryModalDialog.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show user notification message
function showUserNotificationMessage(messageText, messageType = 'info') {
    // Create notification element
    const notificationElement = document.createElement('div');
    notificationElement.className = `notification ${messageType}`;
    notificationElement.textContent = messageText;
    
    // Add to DOM
    document.body.appendChild(notificationElement);
    
    // Show notification
    setTimeout(() => {
        notificationElement.classList.add('show');
    }, 100);
    
    // Hide and remove after delay
    setTimeout(() => {
        notificationElement.classList.remove('show');
        setTimeout(() => {
            if (notificationElement.parentNode) {
                notificationElement.parentNode.removeChild(notificationElement);
            }
        }, 300);
    }, 3000);
}
// DOM Elements - Royal Gallery Specific
const royalNavbar = document.getElementById('navbar');
const royalFilterBtns = document.querySelectorAll('.filter-btn');
const royalCategorySections = document.querySelectorAll('.category-section');
const royalGalleryGrids = document.querySelectorAll('.gallery-grid');
const royalCartCount = document.getElementById('cartCount');
const royalLightboxModal = document.getElementById('lightboxModal');
const royalLightboxClose = document.getElementById('lightboxClose');
const royalLightboxPrev = document.getElementById('lightboxPrev');
const royalLightboxNext = document.getElementById('lightboxNext');
const royalLightboxImage = document.getElementById('lightboxImage');
const royalLightboxTitle = document.getElementById('lightboxTitle');
const royalLightboxDescription = document.getElementById('lightboxDescription');
const royalLightboxPrice = document.getElementById('lightboxPrice');

// State - Royal Gallery Specific
let royalCurrentFilter = 'all';
let royalCurrentSubFilter = 'all';
let royalGalleryItems = [];
let royalCurrentLightboxIndex = 0;
let royalCartItems = [];
let royalWishlistItems = [];
let royalIsMobile = window.innerWidth <= 768;
let royalIsMenuOpen = false;

// Initialize Royal Gallery
document.addEventListener('DOMContentLoaded', () => {
    royalInitGallery();
    royalSetupEventListeners();
    royalLoadAllProducts();
    royalSetupMobileMenu();
});

// Initialize Gallery
function royalInitGallery() {
    royalLoadGalleryItems('all', 'all');
}

// Load All Products
function royalLoadAllProducts() {
    // This is a placeholder. You need to define your 'products' array.
    // Example: const products = [ { id: 1, name: 'Ring', category: 'rings', mainImage: '...', price: 1000 }, ... ];
    if (typeof products === 'undefined') {
        console.error("The 'products' array is not defined. Please define it in your HTML or script.");
        return;
    }
    
    products.forEach(product => {
        const category = product.category;
        const grid = document.getElementById(`${category}-grid`);
        if (grid) {
            const itemElement = royalCreateGalleryItem(product, category);
            grid.appendChild(itemElement);
            royalGalleryItems.push({
                element: itemElement,
                data: product,
                category: category
            });
        }
    });
    royalSetupItemEventListeners();
}

// Setup Event Listeners
function royalSetupEventListeners() {
    royalFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            royalFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            royalCurrentFilter = btn.dataset.category;
            royalCurrentSubFilter = btn.dataset.subcategory || 'all';
            royalLoadGalleryItems(royalCurrentFilter, royalCurrentSubFilter);
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            royalNavbar.classList.add('scrolled');
        } else {
            royalNavbar.classList.remove('scrolled');
        }
    });
    
    window.addEventListener('resize', () => {
        const wasMobile = royalIsMobile;
        royalIsMobile = window.innerWidth <= 768;
        if (wasMobile !== royalIsMobile) {
            royalLoadGalleryItems(royalCurrentFilter, royalCurrentSubFilter);
        }
    });
    
    if (royalLightboxClose) {
        royalLightboxClose.addEventListener('click', royalCloseLightbox);
    }
    
    if (royalLightboxPrev) {
        royalLightboxPrev.addEventListener('click', () => royalNavigateLightbox(-1));
    }
    
    if (royalLightboxNext) {
        royalLightboxNext.addEventListener('click', () => royalNavigateLightbox(1));
    }
    
    if (royalLightboxModal) {
        royalLightboxModal.addEventListener('click', (e) => {
            if (e.target === royalLightboxModal) {
                royalCloseLightbox();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (!royalLightboxModal || !royalLightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            royalCloseLightbox();
        } else if (e.key === 'ArrowLeft') {
            royalNavigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            royalNavigateLightbox(1);
        }
    });
}

// Setup Mobile Menu
function royalSetupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    // Function to toggle the menu
    function royalToggleMobileMenu() {
        royalIsMenuOpen = !royalIsMenuOpen;
        
        if (menuToggle) {
            menuToggle.classList.toggle('active', royalIsMenuOpen);
        }
        
        if (mobileMenu) {
            mobileMenu.classList.toggle('active', royalIsMenuOpen);
        }
        
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.toggle('active', royalIsMenuOpen);
        }
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = royalIsMenuOpen ? 'hidden' : '';
    }

    // 1. Open/close the menu when the hamburger button is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', royalToggleMobileMenu);
    }

    // 2. Close the menu when the overlay is clicked
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', royalToggleMobileMenu);
    }

    // 3. Close the menu when a link inside is clicked
    if (mobileMenuLinks) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                royalIsMenuOpen = false;
                if (menuToggle) menuToggle.classList.remove('active');
                if (mobileMenu) mobileMenu.classList.remove('active');
                if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// Load Gallery Items
function royalLoadGalleryItems(category, subcategory) {
    if (royalIsMobile) {
        royalCategorySections.forEach(section => {
            section.style.display = 'none';
        });
        
        let mobileGrid = document.getElementById('mobile-grid');
        if (!mobileGrid) {
            mobileGrid = document.createElement('div');
            mobileGrid.id = 'mobile-grid';
            mobileGrid.className = 'gallery-grid';
            const gallerySection = document.querySelector('.gallery-section');
            if (gallerySection) {
                gallerySection.appendChild(mobileGrid);
            }
        }
        
        mobileGrid.innerHTML = '';
        
        let filteredProducts = products;
        if (category !== 'all') {
            filteredProducts = products.filter(product => product.category === category);
        }
        if (subcategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.subcategory === subcategory);
        }
        
        filteredProducts.forEach(product => {
            const itemElement = royalCreateGalleryItem(product, 'mobile');
            mobileGrid.appendChild(itemElement);
        });
        
        royalSetupItemEventListeners();
        
    } else {
        const mobileGrid = document.getElementById('mobile-grid');
        if (mobileGrid) {
            mobileGrid.remove();
        }
        
        if (category === 'all') {
            royalCategorySections.forEach(section => {
                section.style.display = 'block';
            });
        } else {
            royalCategorySections.forEach(section => {
                if (section.dataset.category === category) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        }
    }
}

// Create Gallery Item
function royalCreateGalleryItem(product, category) {
    const itemElement = document.createElement('div');
    itemElement.className = 'gallery-item';
    itemElement.dataset.id = product.id;
    itemElement.dataset.category = category;
    
    // Random animation delay for floating effect
    const delay = Math.random() * 2;
    itemElement.style.animationDelay = `${delay}s`;
    
    itemElement.innerHTML = `
        <div class="item-image-container">
            <img src="${product.mainImage}" alt="${product.name}" class="gallery-image">
            <div class="gallery-overlay">
                <button class="item-action-btn view-btn" data-id="${product.id}">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="item-action-btn wishlist-btn" data-id="${product.id}">
                    <i class="${royalWishlistItems.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <button class="item-action-btn cart-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-bag"></i>
                </button>
            </div>
        </div>
        <div class="gallery-info">
            <h3 class="gallery-title">${product.name}</h3>
        </div>
    `;
    
    return itemElement;
}

// Setup Item Event Listeners
function royalSetupItemEventListeners() {
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            royalOpenLightbox(productId);
        });
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            royalToggleWishlist(productId);
        });
    });
    
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            royalAddToCart(productId);
        });
    });
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('gallery-image')) {
                const productId = parseInt(item.dataset.id);
                royalOpenLightbox(productId);
            }
        });
    });
}

// Toggle Wishlist
function royalToggleWishlist(productId) {
    const index = royalWishlistItems.indexOf(productId);
    
    if (index > -1) {
        royalWishlistItems.splice(index, 1);
        royalShowNotification('Item removed from wishlist');
    } else {
        royalWishlistItems.push(productId);
        royalShowNotification('Item added to wishlist');
    }
    
    const btn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
    if (btn) {
        btn.innerHTML = `<i class="${royalWishlistItems.includes(productId) ? 'fas' : 'far'} fa-heart"></i>`;
    }
}

// Add to Cart
function royalAddToCart(productId) {
    const existingItem = royalCartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        royalCartItems.push({
            id: productId,
            quantity: 1
        });
    }
    
    royalUpdateCartCount();
    royalShowNotification('Item added to cart');
}

// Update Cart Count
function royalUpdateCartCount() {
    if (!royalCartCount) return;
    
    const count = royalCartItems.reduce((total, item) => total + item.quantity, 0);
    royalCartCount.textContent = count;
    
    const cartIcon = royalCartCount.parentElement;
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Open Lightbox
function royalOpenLightbox(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    royalCurrentLightboxIndex = royalGalleryItems.findIndex(item => item.data.id === productId);
    
    if (royalLightboxImage) {
        royalLightboxImage.src = product.mainImage;
    }
    
    if (royalLightboxTitle) {
        royalLightboxTitle.textContent = product.name;
    }
    
    if (royalLightboxDescription) {
        royalLightboxDescription.textContent = product.description;
    }
    
    if (royalLightboxPrice) {
        royalLightboxPrice.textContent = `$${product.price.toLocaleString()}`;
    }
    
    if (royalLightboxModal) {
        royalLightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close Lightbox
function royalCloseLightbox() {
    if (royalLightboxModal) {
        royalLightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Navigate Lightbox
function royalNavigateLightbox(direction) {
    royalCurrentLightboxIndex += direction;
    
    if (royalCurrentLightboxIndex < 0) {
        royalCurrentLightboxIndex = royalGalleryItems.length - 1;
    } else if (royalCurrentLightboxIndex >= royalGalleryItems.length) {
        royalCurrentLightboxIndex = 0;
    }
    
    const item = royalGalleryItems[royalCurrentLightboxIndex];
    royalOpenLightbox(item.data.id);
}

// Show Notification
function royalShowNotification(message) {
    const existingNotif = document.querySelector('.royal-notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'royal-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add Royal Gallery CSS
const royalGalleryStyle = document.createElement('style');
royalGalleryStyle.textContent = `
    :root {
        --gold: #d4af37;
        --gold-light: #f4e4bc;
        --dark: #0a0a0a;
        --darker-gray: #1a1a1a;
        --text-primary: #f4e4bc;
        --text-secondary: #d4af37;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--dark);
        color: var(--text-primary);
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
    }
    
    .navbar {
        background: var(--darker-gray);
        padding: 10px 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        transition: all 0.3s ease;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .navbar.scrolled {
        background: rgba(26, 26, 26, 0.98);
        backdrop-filter: blur(15px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .navbar-container {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
    
    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        flex-shrink: 0;
    }
    
    .logo-text {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        font-size: 24px;
        color: var(--gold);
        letter-spacing: 2px;
    }
    
    .nav-menu {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
        flex-shrink: 0;
    }
    
    .nav-link {
        color: var(--text-primary);
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        margin: 0 15px;
        transition: color 0.3s ease;
        white-space: nowrap;
    }
    
    .nav-link:hover {
        color: var(--gold);
    }
    
    .nav-actions {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .nav-btn {
        background: none;
        border: none;
        color: var(--gold);
        font-size: 18px;
        margin-left: 15px;
        cursor: pointer;
        position: relative;
    }
    
    .cart-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background: var(--gold);
        color: var(--dark);
        font-size: 12px;
        font-weight: 600;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .menu-toggle {
        display: none;
        flex-direction: column;
        cursor: pointer;
        padding: 5px;
        background: none;
        border: none;
        z-index: 1001;
    }

    .menu-toggle span {
        width: 25px;
        height: 3px;
        background: var(--text-primary);
        margin: 3px 0;
        transition: 0.3s;
        border-radius: 3px;
    }

    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.active span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .menu-toggle.active span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    .hero {
        padding: 120px 15px 80px;
        text-align: center;
        max-width: 100%;
        margin: 0 auto;
        width: 100%;
    }
    
    .hero h1 {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        font-size: 48px;
        color: var(--gold);
        margin: 0 0 20px;
    }
    
    .hero p {
        font-size: 18px;
        color: var(--text-primary);
        max-width: 100%;
        margin: 0 auto;
        line-height: 1.6;
        padding: 0 20px;
    }
    
    .filters-section {
        padding: 40px 15px;
        text-align: center;
        width: 100%;
    }
    
    .filters-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        max-width: 100%;
    }
    
    .filter-btn {
        background: var(--darker-gray);
        color: var(--gold);
        border: 1px solid var(--gold);
        padding: 8px 16px;
        border-radius: 30px;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
    }
    
    .filter-btn.active {
        background: var(--gold);
        color: var(--dark);
    }
    
    .gallery-section {
        padding: 40px 15px;
        max-width: 100%;
        margin: 0 auto;
        width: 100%;
        position: relative;
    }
    
    .category-section {
        margin-bottom: 60px;
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .category-section {
            display: none !important;
        }
    }
    
    .category-header {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        width: 100%;
    }
    
    .category-title {
        font-family: 'Cinzel', serif;
        font-size: 28px;
        font-weight: 600;
        color: var(--gold);
        margin-right: 20px;
    }
    
    .category-line {
        flex-grow: 1;
        height: 1px;
        background: var(--gold);
        opacity: 0.5;
    }
    
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 30px;
        width: 100%;
        max-width: 100%;
        perspective: 1000px;
    }
    
    .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: all 0.5s ease;
        width: 100%;
        animation: float 6s ease-in-out infinite;
        transform-style: preserve-3d;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0px) rotateX(0deg);
        }
        50% {
            transform: translateY(-15px) rotateX(3deg);
        }
        100% {
            transform: translateY(0px) rotateX(0deg);
        }
    }
    
    .gallery-item:hover {
        transform: translateY(-10px) rotateX(0deg);
        box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);
        animation-play-state: paused;
    }
    
    .item-image-container {
        position: relative;
        height: 300px;
        width: 100%;
        overflow: hidden;
    }
    
    .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    
    .gallery-item:hover .gallery-image {
        transform: scale(1.05);
    }
    
    .gallery-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .gallery-item:hover .gallery-overlay {
        opacity: 1;
    }
    
    .item-action-btn {
        background: rgba(212, 175, 55, 0.8);
        border: none;
        color: var(--dark);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    
    .item-action-btn:hover {
        background: var(--gold);
        transform: scale(1.1);
        box-shadow: 0 6px 15px rgba(212, 175, 55, 0.4);
    }
    
    .gallery-info {
        padding: 15px;
        background: var(--darker-gray);
        width: 100%;
        text-align: left;
        border-top: 1px solid rgba(212, 175, 55, 0.3);
    }
    
    .gallery-title {
        font-family: 'Cinzel', serif;
        font-size: 18px;
        color: var(--text-primary);
        margin: 0;
        text-align: left;
        line-height: 1.3;
    }
    
    .lightbox-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .lightbox-modal.active {
        display: flex;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90vh;
    }
    
    .lightbox-image {
        max-width: 100%;
        max-height: 85vh;
        object-fit: contain;
        border-radius: 4px;
        border: 2px solid var(--gold);
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: var(--text-primary);
        font-size: 24px;
        cursor: pointer;
    }
    
    .lightbox-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: var(--gold);
        color: var(--dark);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        cursor: pointer;
        border: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    
    .lightbox-prev {
        left: -50px;
    }
    
    .lightbox-next {
        right: -50px;
    }
    
    .lightbox-info {
        position: absolute;
        bottom: -40px;
        left: 0;
        right: 0;
        text-align: center;
        color: var(--text-primary);
    }
    
    .lightbox-title {
        font-family: 'Cinzel', serif;
        font-size: 20px;
        color: var(--gold);
        margin: 0 0 5px;
    }
    
    .lightbox-price {
        font-size: 18px;
        color: var(--gold);
        margin: 0;
    }
    
    .royal-notification {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--darker-gray);
        color: var(--gold);
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        border-left: 3px solid var(--gold);
        max-width: calc(100% - 60px);
    }
    
    .royal-notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .footer {
        background: var(--darker-gray);
        color: var(--text-primary);
        padding: 40px 15px;
        text-align: center;
        border-top: 1px solid var(--gold);
        width: 100%;
    }
    
    /* Mobile Menu Styles */
    .mobile-menu {
        position: fixed;
        top: 0;
        right: -300px;
        width: 300px;
        height: 100vh;
        background: var(--darker-gray);
        z-index: 1001;
        transition: right 0.3s ease;
        overflow-y: auto;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
    }
    
    .mobile-menu.active {
        right: 0;
    }
    
    .mobile-menu-content {
        padding: 80px 20px 20px;
    }
    
    .mobile-nav-menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .mobile-nav-menu li {
        margin-bottom: 15px;
    }
    
    .mobile-menu-link {
        color: var(--text-primary);
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        display: block;
        padding: 10px 0;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        transition: color 0.3s ease;
    }
    
    .mobile-menu-link:hover {
        color: var(--gold);
    }
    
    .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    
    .mobile-menu-overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    /* Extra Small Screens (max-width: 480px) */
    @media (max-width: 480px) {
        .navbar-container {
            padding: 0 10px;
            height: 50px;
            width: 100%;
        }
        
        .logo-text {
            font-size: 16px;
        }
        
        .menu-toggle {
            display: flex;
        }
        
        .nav-menu {
            display: none;
        }
        
        .nav-actions {
            order: 3;
        }
        
        .hero {
            padding: 90px 10px 50px;
        }
        
        .hero h1 {
            font-size: 24px;
        }
        
        .hero p {
            font-size: 14px;
            padding: 0 10px;
        }
        
        .filters-section {
            padding: 20px 10px;
        }
        
        .filters-container {
            gap: 8px;
        }
        
        .filter-btn {
            padding: 6px 12px;
            font-size: 12px;
            margin: 3px;
        }
        
        .gallery-section {
            padding: 20px 10px;
        }
        
        .gallery-grid {
            grid-template-columns: 1fr;
            gap: 15px;
            width: 100%;
        }
        
        .gallery-item {
            width: 100%;
        }
        
        .item-image-container {
            height: 200px;
        }
        
        .gallery-info {
            padding: 12px;
        }
        
        .gallery-title {
            font-size: 14px;
            text-align: center;
            margin-bottom: 0;
        }
        
        .item-action-btn {
            width: 30px;
            height: 30px;
            font-size: 12px;
            margin: 0 3px;
        }
        
        .lightbox-modal {
            padding: 10px;
        }
        
        .lightbox-content {
            max-width: 95%;
        }
        
        .lightbox-close {
            top: -30px;
            font-size: 18px;
        }
        
        .lightbox-nav {
            width: 30px;
            height: 30px;
            font-size: 14px;
        }
        
        .lightbox-prev {
            left: -30px;
        }
        
        .lightbox-next {
            right: -30px;
        }
        
        .lightbox-info {
            bottom: -30px;
        }
        
        .lightbox-title {
            font-size: 16px;
        }
        
        .lightbox-price {
            font-size: 14px;
        }
        
        .royal-notification {
            bottom: 20px;
            right: 20px;
            left: 20px;
            padding: 10px 15px;
            font-size: 12px;
            max-width: calc(100% - 40px);
        }
        
        .footer {
            padding: 20px 10px;
            font-size: 12px;
        }
    }
    
    /* Small Mobile (max-width: 360px) */
    @media (max-width: 360px) {
        .navbar-container {
            padding: 0 8px;
        }
        
        .logo-text {
            font-size: 14px;
        }
        
        .hero h1 {
            font-size: 20px;
        }
        
        .hero p {
            font-size: 12px;
        }
        
        .filter-btn {
            padding: 5px 10px;
            font-size: 11px;
        }
        
        .gallery-title {
            font-size: 12px;
        }
        
        .item-action-btn {
            width: 25px;
            height: 25px;
            font-size: 10px;
        }
    }
    
    /* Mobile Responsive */
    @media (max-width: 768px) {
        .navbar-container {
            padding: 0 10px;
        }
        
        .logo-text {
            font-size: 18px;
        }
        
        .menu-toggle {
            display: flex;
        }
        
        .nav-menu {
            display: none;
        }
        
        .hero {
            padding: 100px 15px 60px;
        }
        
        .hero h1 {
            font-size: 36px;
        }
        
        .gallery-section {
            padding: 30px 15px;
        }
        
        .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .lightbox-prev {
            left: -40px;
        }
        
        .lightbox-next {
            right: -40px;
        }
    }
    
    /* Tablet Responsive */
    @media (min-width: 769px) and (max-width: 1024px) {
        .navbar-container {
            padding: 0 15px;
        }
        
        .logo-text {
            font-size: 20px;
        }
        
        .nav-link {
            font-size: 15px;
            margin: 0 12px;
        }
        
        .nav-btn {
            font-size: 17px;
            margin-left: 12px;
        }
        
        .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 25px;
        }
    }
    
    /* Desktop Responsive */
    @media (min-width: 1025px) {
        .navbar-container {
            padding: 0 20px;
            max-width: 1200px;
        }
        
        .logo-text {
            font-size: 24px;
        }
        
        .nav-link {
            font-size: 16px;
            margin: 0 15px;
        }
        
        .nav-btn {
            font-size: 18px;
            margin-left: 15px;
        }
        
        .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
        }
    }
    
    /* Large Desktop Responsive */
    @media (min-width: 1440px) {
        .navbar-container {
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 35px;
        }
    } 
`;
document.head.appendChild(royalGalleryStyle);
// navbar.js - Responsive Navigation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const searchToggle = document.getElementById('searchToggle');
    
    // Create mobile menu container if it doesn't exist
    if (!document.getElementById('mobileMenu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobileMenu';
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
            <ul class="mobile-nav-menu">
                <li><a href="index.html" class="mobile-nav-link">Home</a></li>
                <li><a href="products.html" class="mobile-nav-link">Products</a></li>
                <li><a href="aboutus.html" class="mobile-nav-link">About us</a></li>
                <li><a href="gallery.html" class="mobile-nav-link">Gallery</a></li>
                <li><a href="compare.html" class="mobile-nav-link">Compare</a></li>
            </ul>
            <div class="mobile-nav-actions">
                <button class="mobile-nav-btn" id="mobileSearchToggle">
                    <i class="fas fa-search"></i>
                </button>
                <button class="mobile-nav-btn">
                    <i class="far fa-heart"></i>
                </button>
                <button class="mobile-nav-btn">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="cart-count" id="mobileCartCount">0</span>
                </button>
            </div>
        `;
        document.body.appendChild(mobileMenu);
    }
    
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        menuToggle.style.zIndex="9999"
    }
    
    // Event listeners
    menuToggle.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting based on current page
    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        mobileNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActiveLink();
    
    // Search functionality (placeholder)
    searchToggle.addEventListener('click', function() {
        // You can implement a search modal or dropdown here
        console.log('Search clicked');
    });
    
    // Mobile search functionality
    const mobileSearchToggle = document.getElementById('mobileSearchToggle');
    if (mobileSearchToggle) {
        mobileSearchToggle.addEventListener('click', function() {
            // You can implement a search modal or dropdown here
            console.log('Mobile search clicked');
        });
    }
    
    // Sync cart count between desktop and mobile
    const cartCount = document.getElementById('cartCount');
    const mobileCartCount = document.getElementById('mobileCartCount');
    
    function updateCartCount(count) {
        if (cartCount) cartCount.textContent = count;
        if (mobileCartCount) mobileCartCount.textContent = count;
    }
    
    // Example of how to update cart count (you can replace this with your actual cart logic)
    // updateCartCount(5);
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 992) {
            closeMobileMenu();
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Initial call to set up the correct state
    handleResize();
});

// Brands Carousel
const rhBrandsTrack = document.getElementById('rhBrandsTrack');
const rhBrandSlides = document.querySelectorAll('.rh-brand-slide');
const rhBrandIndicators = document.querySelectorAll('.rh-indicator');
const rhNextBrand = document.getElementById('rhNextBrand');
const rhPrevBrand = document.getElementById('rhPrevBrand');

if (rhBrandsTrack && rhBrandSlides.length > 0) {
    let rhCurrentBrandSlide = 0;
    const rhTotalBrandSlides = rhBrandSlides.length;

    function rhShowBrandSlide(index) {
        if (index < 0) {
            rhCurrentBrandSlide = rhTotalBrandSlides - 1;
        } else if (index >= rhTotalBrandSlides) {
            rhCurrentBrandSlide = 0;
        } else {
            rhCurrentBrandSlide = index;
        }

        rhBrandsTrack.style.transform = `translateX(-${rhCurrentBrandSlide * 100}%)`;

        // Update indicators
        rhBrandIndicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === rhCurrentBrandSlide);
        });
    }

    // Next/Previous buttons
    if (rhNextBrand) {
        rhNextBrand.addEventListener('click', () => {
            rhShowBrandSlide(rhCurrentBrandSlide + 1);
        });
    }

    if (rhPrevBrand) {
        rhPrevBrand.addEventListener('click', () => {
            rhShowBrandSlide(rhCurrentBrandSlide - 1);
        });
    }

    // Indicator clicks
    rhBrandIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            rhShowBrandSlide(index);
        });
    });

    // Auto-rotate carousel
    setInterval(() => {
        rhShowBrandSlide(rhCurrentBrandSlide + 1);
    }, 6000);
}

// Achievement Counter Animation - Mobile Friendly Version
const rhAchievementsSection = document.querySelector('.rh-achievements-section');

if (rhAchievementsSection) {
    console.log('Achievements section found');
    
    const rhAchievementNumbers = document.querySelectorAll('.rh-achievement-number');
    console.log('Found achievement numbers:', rhAchievementNumbers.length);
    
    if (rhAchievementNumbers.length > 0) {
        // Set initial state
        rhAchievementNumbers.forEach(counter => {
            counter.innerText = '0';
            counter.dataset.animated = 'false'; // Track animation state
        });

        // Check if mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        console.log('Is mobile device:', isMobile);

        // Animation function with mobile optimization
        function animateCounter(element, target) {
            // Skip if already animated
            if (element.dataset.animated === 'true') return;
            
            element.dataset.animated = 'true';
            const duration = isMobile ? 1500 : 2000; // Slightly faster on mobile
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    
                    // Apply special formatting
                    if (target === 75000) {
                        element.innerText = '75,000+';
                    } else if (target === 99) {
                        element.innerText = '99%';
                    } else {
                        element.innerText = target.toLocaleString();
                    }
                } else {
                    element.innerText = Math.floor(current).toLocaleString();
                }
            }, 16);
        }

        // Intersection Observer with mobile optimization
        const rhObserverOptions = {
            threshold: isMobile ? 0.2 : 0.5, // Lower threshold for mobile
            rootMargin: isMobile ? '0px' : '0px'
        };

        const rhObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Achievements section is visible');
                    
                    rhAchievementNumbers.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        
                        // Only animate if not already animated
                        if (counter.dataset.animated === 'false') {
                            console.log('Animating counter to:', target);
                            animateCounter(counter, target);
                        }
                    });
                    
                    // Stop observing after first trigger
                    rhObserver.unobserve(entry.target);
                }
            });
        }, rhObserverOptions);

        rhObserver.observe(rhAchievementsSection);
        
        // Mobile fallback - trigger on scroll if IntersectionObserver fails
        if (isMobile) {
            let triggered = false;
            window.addEventListener('scroll', () => {
                if (triggered) return;
                
                const rect = rhAchievementsSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    console.log('Mobile fallback triggered');
                    triggered = true;
                    
                    rhAchievementNumbers.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        if (counter.dataset.animated === 'false') {
                            animateCounter(counter, target);
                        }
                    });
                }
            }, { passive: true });
        }
    }
}

// Animate on Scroll - Mobile Friendly Version
const rhAnimateOnScroll = () => {
    const rhElements = document.querySelectorAll('.rh-value-card, .rh-team-member, .rh-achievement-item, .rh-brand-slide, .rh-story-text, .rh-story-image');
    
    if (rhElements.length > 0) {
        // Check if mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        const rhElementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { 
            threshold: isMobile ? 0.1 : 0.2, // Lower threshold for mobile
            rootMargin: '0px 0px -50px 0px' 
        });
        
        rhElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            rhElementObserver.observe(element);
        });
        
        // Mobile fallback for scroll animations
        if (isMobile) {
            const checkElements = () => {
                rhElements.forEach(element => {
                    if (element.style.opacity === '0') {
                        const rect = element.getBoundingClientRect();
                        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                        
                        if (isVisible) {
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                        }
                    }
                });
            };
            
            // Throttled scroll event for mobile
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (scrollTimeout) {
                    window.cancelAnimationFrame(scrollTimeout);
                }
                
                scrollTimeout = window.requestAnimationFrame(() => {
                    checkElements();
                });
            }, { passive: true });
            
            // Initial check
            checkElements();
        }
    }
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    rhAnimateOnScroll();
});

// Initialize animations on page load
window.addEventListener('load', () => {
    rhAnimateOnScroll();
    document.body.classList.add('loaded');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.rh-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (rhMenuToggle && rhNavMenu) {
            rhMenuToggle.classList.remove('active');
            rhNavMenu.classList.remove('active');
        }
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.rh-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
       // Get only necklaces from the products array
        const necklaces = products.filter(product => product.category === "necklaces" || product.category === "pendants");
        
        // Current filter state
        let currentFilter = "all";
        
        // DOM elements
        const productsContainer = document.getElementById("productsContainer");
        const filterButtons = document.querySelectorAll(".filter-btn");
        const notification = document.getElementById("notification");
        const notificationText = document.getElementById("notificationText");
        
        // Initialize the page
        function init() {
            displayNecklaces(necklaces);
            setupFilterButtons();
        }
        
        // Display necklaces
        function displayNecklaces(necklacesToShow) {
            if (necklacesToShow.length === 0) {
                productsContainer.innerHTML = `
                    <div class="no-products">
                        <i class="fas fa-gem"></i>
                        <h3>No necklaces found</h3>
                        <p>Try adjusting your filters</p>
                    </div>
                `;
                return;
            }
            
            productsContainer.innerHTML = necklacesToShow.map((necklace, index) => `
                <div class="product-card" style="animation-delay: ${index * 0.1}s">
                    <div class="product-glow"></div>
                    <div class="product-image-container">
                        <img src="${necklace.sideImages}" alt="${necklace.name}" class="product-image">
                        <div class="product-overlay"></div>
                        <div class="product-actions">
                            <button class="action-btn wishlist-btn" data-id="${necklace.id}">
                                <i class="far fa-heart"></i>
                            </button>
                            <button class="action-btn quick-view-btn" data-id="${necklace.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${necklace.name}</h3>
                        <div class="product-brand">
                            <span class="brand-label">Brand:</span>
                            <span class="brand-name">${necklace.brand}</span>
                        </div>
                        <div class="product-rating">
                            ${generateStars(necklace.rating)}
                            <span class="rating-text">${necklace.rating}.0 (${Math.floor(Math.random() * 50) + 10} reviews)</span>
                        </div>
                        <div class="product-price-container">
                            <span class="price-glow"></span>
                            <span class="product-price">PKR ${necklace.price.toLocaleString()}</span>
                        </div>
                        <button class="add-to-cart-btn" data-id="${necklace.id}">
                            <span class="btn-shine"></span>
                            <i class="fas fa-shopping-cart btn-icon"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to new elements
            setupProductEventListeners();
        }
        
        // Generate star rating HTML
        function generateStars(rating) {
            let stars = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            return stars;
        }
        
        // Setup filter buttons
        function setupFilterButtons() {
            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    // Update active state
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");
                    
                    // Get filter value
                    currentFilter = button.getAttribute("data-filter");
                    
                    // Filter necklaces
                    let filteredNecklaces = necklaces;
                    if (currentFilter !== "all") {
                        filteredNecklaces = necklaces.filter(necklace => necklace.subcategory === currentFilter);
                    }
                    
                    // Display filtered necklaces
                    displayNecklaces(filteredNecklaces);
                });
            });
        }
        
        // Setup product event listeners
        function setupProductEventListeners() {
            // Add to cart buttons
            document.querySelectorAll(".add-to-cart-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-id");
                    const product = necklaces.find(p => p.id == id);
                    showNotification(`${product.name} added to cart!`);
                    this.classList.add("bounce");
                    setTimeout(() => this.classList.remove("bounce"), 600);
                });
            });
            
            // Wishlist buttons
            document.querySelectorAll(".wishlist-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-id");
                    const product = necklaces.find(p => p.id == id);
                    
                    if (this.classList.contains("active")) {
                        this.classList.remove("active");
                        this.innerHTML = '<i class="far fa-heart"></i>';
                        showNotification(`${product.name} removed from wishlist`);
                    } else {
                        this.classList.add("active");
                        this.innerHTML = '<i class="fas fa-heart"></i>';
                        showNotification(`${product.name} added to wishlist!`);
                    }
                });
            });
            
            // Quick view buttons
            document.querySelectorAll(".quick-view-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-id");
                    const product = necklaces.find(p => p.id == id);
                    showNotification(`Quick view for ${product.name}`);
                });
            });
        }
        
        // Show notification
        function showNotification(message) {
            notificationText.textContent = message;
            notification.classList.add("show");
            
            setTimeout(() => {
                notification.classList.remove("show");
            }, 3000);
        }
        
        // Initialize the page when DOM is loaded
        document.addEventListener("DOMContentLoaded", init);
        
        // Get only rings from the products array
        const ringsCollection = products.filter(product => product.category === "rings");
        
        // Current filter state for rings
        let ringsCurrentFilter = "all";
        
        // DOM elements for rings page
        const ringsContainer = document.getElementById("ringsContainer");
        const ringsFilterButtons = document.querySelectorAll(".rings-filter-btn");
        const ringsNotification = document.getElementById("ringsNotification");
        const ringsNotificationText = document.getElementById("ringsNotificationText");
        
        // Initialize the rings page
        function initRingsPage() {
            displayRings(ringsCollection);
            setupRingsFilterButtons();
        }
        
        // Display rings
        function displayRings(ringsToShow) {
            if (ringsToShow.length === 0) {
                ringsContainer.innerHTML = `
                    <div class="rings-no-products">
                        <i class="fas fa-gem"></i>
                        <h3>No rings found</h3>
                        <p>Try adjusting your filters</p>
                    </div>
                `;
                return;
            }
            
            ringsContainer.innerHTML = ringsToShow.map((ring, index) => `
                <div class="ring-card" style="animation-delay: ${index * 0.1}s">
                    <div class="ring-glow"></div>
                    <div class="ring-image-container">
                        <img src="${ring.sideImages}" alt="${ring.name}" class="ring-image">
                        <div class="ring-overlay"></div>
                        <div class="ring-actions">
                            <button class="ring-action-btn ring-wishlist-btn" data-ring-id="${ring.id}">
                                <i class="far fa-heart"></i>
                            </button>
                            <button class="ring-action-btn ring-quick-view-btn" data-ring-id="${ring.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="ring-info">
                        <h3 class="ring-name">${ring.name}</h3>
                        <div class="ring-brand">
                            <span class="ring-brand-label">Brand:</span>
                            <span class="ring-brand-name">${ring.brand}</span>
                        </div>
                        <div class="ring-rating">
                            ${generateRingStars(ring.rating)}
                            <span class="ring-rating-text">${ring.rating}.0 (${Math.floor(Math.random() * 50) + 10} reviews)</span>
                        </div>
                        <div class="ring-price-container">
                            <span class="ring-price-glow"></span>
                            <span class="ring-price">PKR ${ring.price.toLocaleString()}</span>
                        </div>
                        <button class="ring-add-to-cart-btn" data-ring-id="${ring.id}">
                            <span class="ring-btn-shine"></span>
                            <i class="fas fa-shopping-cart ring-btn-icon"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to new elements
            setupRingEventListeners();
        }
        
        // Generate star rating HTML for rings
        function generateRingStars(rating) {
            let stars = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            return stars;
        }
        
        // Setup filter buttons for rings
        function setupRingsFilterButtons() {
            ringsFilterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    // Update active state
                    ringsFilterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");
                    
                    // Get filter value
                    ringsCurrentFilter = button.getAttribute("data-ring-filter");
                    
                    // Filter rings
                    let filteredRings = ringsCollection;
                    if (ringsCurrentFilter !== "all") {
                        filteredRings = ringsCollection.filter(ring => ring.subcategory === ringsCurrentFilter);
                    }
                    
                    // Display filtered rings
                    displayRings(filteredRings);
                });
            });
        }
        
        // Setup ring event listeners
        function setupRingEventListeners() {
            // Add to cart buttons
            document.querySelectorAll(".ring-add-to-cart-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-ring-id");
                    const ring = ringsCollection.find(r => r.id == id);
                    showRingsNotification(`${ring.name} added to cart!`);
                    this.classList.add("rings-bounce");
                    setTimeout(() => this.classList.remove("rings-bounce"), 600);
                });
            });
            
            // Wishlist buttons
            document.querySelectorAll(".ring-wishlist-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-ring-id");
                    const ring = ringsCollection.find(r => r.id == id);
                    
                    if (this.classList.contains("active")) {
                        this.classList.remove("active");
                        this.innerHTML = '<i class="far fa-heart"></i>';
                        showRingsNotification(`${ring.name} removed from wishlist`);
                    } else {
                        this.classList.add("active");
                        this.innerHTML = '<i class="fas fa-heart"></i>';
                        showRingsNotification(`${ring.name} added to wishlist!`);
                    }
                });
            });
            
            // Quick view buttons
            document.querySelectorAll(".ring-quick-view-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-ring-id");
                    const ring = ringsCollection.find(r => r.id == id);
                    showRingsNotification(`Quick view for ${ring.name}`);
                });
            });
        }
        
        // Show notification for rings
        function showRingsNotification(message) {
            ringsNotificationText.textContent = message;
            ringsNotification.classList.add("show");
            
            setTimeout(() => {
                ringsNotification.classList.remove("show");
            }, 3000);
        }
        
        // Initialize the rings page when DOM is loaded
        document.addEventListener("DOMContentLoaded", initRingsPage);
          const earringsCollection = products.filter(product => product.category === "earrings");
        
        // Current filter state for earrings
        let earringsCurrentFilter = "all";
        
        // DOM elements for earrings page
        const earringsContainer = document.getElementById("earringsContainer");
        const earringsFilterButtons = document.querySelectorAll(".earrings-filter-btn");
        const earringsNotification = document.getElementById("earringsNotification");
        const earringsNotificationText = document.getElementById("earringsNotificationText");
        
        // Initialize the earrings page
        function initEarringsPage() {
            displayEarrings(earringsCollection);
            setupEarringsFilterButtons();
        }
        
        // Display earrings
        function displayEarrings(earringsToShow) {
            if (earringsToShow.length === 0) {
                earringsContainer.innerHTML = `
                    <div class="earrings-no-products">
                        <i class="fas fa-gem"></i>
                        <h3>No earrings found</h3>
                        <p>Try adjusting your filters</p>
                    </div>
                `;
                return;
            }
            
            earringsContainer.innerHTML = earringsToShow.map((earring, index) => `
                <div class="earring-card" style="animation-delay: ${index * 0.1}s">
                    <div class="earring-glow"></div>
                    <div class="earring-image-container">
                        <img src="${earring.sideImages}" alt="${earring.name}" class="earring-image">
                        <div class="earring-overlay"></div>
                        <div class="earring-actions">
                            <button class="earring-action-btn earring-wishlist-btn" data-earring-id="${earring.id}">
                                <i class="far fa-heart"></i>
                            </button>
                            <button class="earring-action-btn earring-quick-view-btn" data-earring-id="${earring.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="earring-info">
                        <h3 class="earring-name">${earring.name}</h3>
                        <div class="earring-brand">
                            <span class="earring-brand-label">Brand:</span>
                            <span class="earring-brand-name">${earring.brand}</span>
                        </div>
                        <div class="earring-rating">
                            ${generateEarringStars(earring.rating)}
                            <span class="earring-rating-text">${earring.rating}.0 (${Math.floor(Math.random() * 50) + 10} reviews)</span>
                        </div>
                        <div class="earring-price-container">
                            <span class="earring-price-glow"></span>
                            <span class="earring-price">PKR ${earring.price.toLocaleString()}</span>
                        </div>
                        <button class="earring-add-to-cart-btn" data-earring-id="${earring.id}">
                            <span class="earring-btn-shine"></span>
                            <i class="fas fa-shopping-cart earring-btn-icon"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to new elements
            setupEarringEventListeners();
        }
        
        // Generate star rating HTML for earrings
        function generateEarringStars(rating) {
            let stars = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            return stars;
        }
        
        // Setup filter buttons for earrings
        function setupEarringsFilterButtons() {
            earringsFilterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    // Update active state
                    earringsFilterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");
                    
                    // Get filter value
                    earringsCurrentFilter = button.getAttribute("data-earring-filter");
                    
                    // Filter earrings
                    let filteredEarrings = earringsCollection;
                    if (earringsCurrentFilter !== "all") {
                        filteredEarrings = earringsCollection.filter(earring => earring.subcategory === earringsCurrentFilter);
                    }
                    
                    // Display filtered earrings
                    displayEarrings(filteredEarrings);
                });
            });
        }
        
        // Setup earring event listeners
        function setupEarringEventListeners() {
            // Add to cart buttons
            document.querySelectorAll(".earring-add-to-cart-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-earring-id");
                    const earring = earringsCollection.find(e => e.id == id);
                    showEarringsNotification(`${earring.name} added to cart!`);
                    this.classList.add("earrings-bounce");
                    setTimeout(() => this.classList.remove("earrings-bounce"), 600);
                });
            });
            
            // Wishlist buttons
            document.querySelectorAll(".earring-wishlist-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-earring-id");
                    const earring = earringsCollection.find(e => e.id == id);
                    
                    if (this.classList.contains("active")) {
                        this.classList.remove("active");
                        this.innerHTML = '<i class="far fa-heart"></i>';
                        showEarringsNotification(`${earring.name} removed from wishlist`);
                    } else {
                        this.classList.add("active");
                        this.innerHTML = '<i class="fas fa-heart"></i>';
                        showEarringsNotification(`${earring.name} added to wishlist!`);
                    }
                });
            });
            
            // Quick view buttons
            document.querySelectorAll(".earring-quick-view-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-earring-id");
                    const earring = earringsCollection.find(e => e.id == id);
                    showEarringsNotification(`Quick view for ${earring.name}`);
                });
            });
        }
        
        // Show notification for earrings
        function showEarringsNotification(message) {
            earringsNotificationText.textContent = message;
            earringsNotification.classList.add("show");
            
            setTimeout(() => {
                earringsNotification.classList.remove("show");
            }, 3000);
        }
        
        // Initialize the earrings page when DOM is loaded
        document.addEventListener("DOMContentLoaded", initEarringsPage);
           const braceletsCollection = products.filter(product => product.category === "bracelets");
        
        // Current filter state for bracelets
        let braceletsCurrentFilter = "all";
        
        // DOM elements for bracelets page
        const braceletsContainer = document.getElementById("braceletsContainer");
        const braceletsFilterButtons = document.querySelectorAll(".bracelets-filter-btn");
        const braceletsNotification = document.getElementById("braceletsNotification");
        const braceletsNotificationText = document.getElementById("braceletsNotificationText");
        
        // Initialize the bracelets page
        function initBraceletsPage() {
            displayBracelets(braceletsCollection);
            setupBraceletsFilterButtons();
        }
        
        // Display bracelets
        function displayBracelets(braceletsToShow) {
            if (braceletsToShow.length === 0) {
                braceletsContainer.innerHTML = `
                    <div class="bracelets-no-products">
                        <i class="fas fa-gem"></i>
                        <h3>No bracelets found</h3>
                        <p>Try adjusting your filters</p>
                    </div>
                `;
                return;
            }
            
            braceletsContainer.innerHTML = braceletsToShow.map((bracelet, index) => `
                <div class="bracelet-card" style="animation-delay: ${index * 0.1}s">
                    <div class="bracelet-glow"></div>
                    <div class="bracelet-image-container">
                        <img src="${bracelet.sideImages}" alt="${bracelet.name}" class="bracelet-image">
                        <div class="bracelet-overlay"></div>
                        <div class="bracelet-actions">
                            <button class="bracelet-action-btn bracelet-wishlist-btn" data-bracelet-id="${bracelet.id}">
                                <i class="far fa-heart"></i>
                            </button>
                            <button class="bracelet-action-btn bracelet-quick-view-btn" data-bracelet-id="${bracelet.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="bracelet-info">
                        <h3 class="bracelet-name">${bracelet.name}</h3>
                        <div class="bracelet-brand">
                            <span class="bracelet-brand-label">Brand:</span>
                            <span class="bracelet-brand-name">${bracelet.brand}</span>
                        </div>
                        <div class="bracelet-rating">
                            ${generateBraceletStars(bracelet.rating)}
                            <span class="bracelet-rating-text">${bracelet.rating}.0 (${Math.floor(Math.random() * 50) + 10} reviews)</span>
                        </div>
                        <div class="bracelet-price-container">
                            <span class="bracelet-price-glow"></span>
                            <span class="bracelet-price">PKR ${bracelet.price.toLocaleString()}</span>
                        </div>
                        <button class="bracelet-add-to-cart-btn" data-bracelet-id="${bracelet.id}">
                            <span class="bracelet-btn-shine"></span>
                            <i class="fas fa-shopping-cart bracelet-btn-icon"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to new elements
            setupBraceletEventListeners();
        }
        
        // Generate star rating HTML for bracelets
        function generateBraceletStars(rating) {
            let stars = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            return stars;
        }
        
        // Setup filter buttons for bracelets
        function setupBraceletsFilterButtons() {
            braceletsFilterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    // Update active state
                    braceletsFilterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");
                    
                    // Get filter value
                    braceletsCurrentFilter = button.getAttribute("data-bracelet-filter");
                    
                    // Filter bracelets
                    let filteredBracelets = braceletsCollection;
                    if (braceletsCurrentFilter !== "all") {
                        filteredBracelets = braceletsCollection.filter(bracelet => bracelet.subcategory === braceletsCurrentFilter);
                    }
                    
                    // Display filtered bracelets
                    displayBracelets(filteredBracelets);
                });
            });
        }
        
        // Setup bracelet event listeners
        function setupBraceletEventListeners() {
            // Add to cart buttons
            document.querySelectorAll(".bracelet-add-to-cart-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-bracelet-id");
                    const bracelet = braceletsCollection.find(b => b.id == id);
                    showBraceletsNotification(`${bracelet.name} added to cart!`);
                    this.classList.add("bracelets-bounce");
                    setTimeout(() => this.classList.remove("bracelets-bounce"), 600);
                });
            });
            
            // Wishlist buttons
            document.querySelectorAll(".bracelet-wishlist-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-bracelet-id");
                    const bracelet = braceletsCollection.find(b => b.id == id);
                    
                    if (this.classList.contains("active")) {
                        this.classList.remove("active");
                        this.innerHTML = '<i class="far fa-heart"></i>';
                        showBraceletsNotification(`${bracelet.name} removed from wishlist`);
                    } else {
                        this.classList.add("active");
                        this.innerHTML = '<i class="fas fa-heart"></i>';
                        showBraceletsNotification(`${bracelet.name} added to wishlist!`);
                    }
                });
            });
            
            // Quick view buttons
            document.querySelectorAll(".bracelet-quick-view-btn").forEach(button => {
                button.addEventListener("click", function() {
                    const id = this.getAttribute("data-bracelet-id");
                    const bracelet = braceletsCollection.find(b => b.id == id);
                    showBraceletsNotification(`Quick view for ${bracelet.name}`);
                });
            });
        }
        
        // Show notification for bracelets
        function showBraceletsNotification(message) {
            braceletsNotificationText.textContent = message;
            braceletsNotification.classList.add("show");
            
            setTimeout(() => {
                braceletsNotification.classList.remove("show");
            }, 3000);
        }
        
        // Initialize the bracelets page when DOM is loaded
        document.addEventListener("DOMContentLoaded", initBraceletsPage);
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const closeMessageBtn = document.getElementById('closeMessage');
    
    // Add input event listeners for real-time validation
    nameInput.addEventListener('input', function() {
        validateField(nameInput, 'Please enter your name');
    });
    
    emailInput.addEventListener('input', function() {
        validateEmail();
    });
    
    messageInput.addEventListener('input', function() {
        validateField(messageInput, 'Please enter your message');
    });
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateField(nameInput, 'Please enter your name');
        const isEmailValid = validateEmail();
        const isMessageValid = validateField(messageInput, 'Please enter your message');
        
        // If all fields are valid, show success message
        if (isNameValid && isEmailValid && isMessageValid) {
            // Show loading state on button
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Reset button state
                submitBtn.innerHTML = 'Send Royal Message';
                submitBtn.disabled = false;
                
                // Show success message
                successMessage.classList.add('show');
                
                // Scroll to top of success message
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Hide success message after 10 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 10000);
            }, 1500);
        }
    });
    
    // Close success message
    closeMessageBtn.addEventListener('click', function() {
        successMessage.classList.remove('show');
    });
    
    // Validate individual field
    function validateField(field, errorMessage) {
        const value = field.value.trim();
        const errorElement = field.nextElementSibling;
        
        if (value === '') {
            showError(field, errorElement, errorMessage);
            return false;
        } else {
            hideError(field, errorElement);
            return true;
        }
    }
    
    // Validate email field
    function validateEmail() {
        const value = emailInput.value.trim();
        const errorElement = emailInput.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === '') {
            showError(emailInput, errorElement, 'Please enter a valid email address');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(emailInput, errorElement, 'Please enter a valid email address');
            return false;
        } else {
            hideError(emailInput, errorElement);
            return true;
        }
    }
    
    // Show error for a field
    function showError(field, errorElement, message) {
        field.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Hide error for a field
    function hideError(field, errorElement) {
        field.classList.remove('error');
        errorElement.style.display = 'none';
    }
});
