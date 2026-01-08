-- Clear existing data (optional, handling cascade)
truncate table public.destinations cascade;
truncate table public.categories cascade;

-- 1. Insert Categories
insert into public.categories (name, slug, sort_order, description) values
('Heritage & Monuments', 'heritage-monuments', 1, 'Timeless architectural marvels and UNESCO sites'),
('Royal Cities', 'royal-cities', 2, 'Palaces, forts, and the regal history of India'),
('Spiritual / Pilgrimage', 'spiritual-pilgrimage', 3, 'Sacred rivers, temples, and spiritual centers'),
('Beaches & Relaxation', 'beaches-relaxation', 4, 'Sun, sand, and coastal serenity'),
('Nature & Adventure', 'nature-adventure', 5, 'Mountains, valleys, and adrenaline-pumping activities'),
('Wildlife & Eco-tourism', 'wildlife-eco-tourism', 6, 'National parks and exotic flora and fauna'),
('Urban & Culture', 'urban-culture', 7, 'Metropolitan vibes, colonial history, and modern life'),
('Forts', 'forts', 8, 'Majestic citadels standing the test of time'),
('Temples', 'temples', 9, 'Architectural masterpieces dedicated to the divine'),
('Hill Stations', 'hill-stations', 10, 'Cool retreats in the mountains'),
('Desert & Rural Experiences', 'desert-rural', 11, 'Golden sands, camels, and authentic village life'),
('Offbeat Destinations', 'offbeat', 12, 'Hidden gems away from the crowds');

-- Helper function to get category id by name (for readability in manual inserts)
-- Note: In raw SQL we often just use subqueries. I will use DO block or just subqueries in VALUES.

-- 2. Insert Destinations
-- We use a CTE or just direct inserts with sub-selects for categories.

-- Heritage & Monuments
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Taj Mahal', 'Uttar Pradesh', 'Agra', (select id from public.categories where slug = 'heritage-monuments'), 'North India', 'UNESCO World Heritage site and one of the New Seven Wonders of the World. A symbol of eternal love.', 1, 'taj-mahal', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop'),
('Qutub Minar', 'New Delhi', 'Delhi', (select id from public.categories where slug = 'heritage-monuments'), 'North India', 'Historic minaret and UNESCO World Heritage site, displaying intricate Indo-Islamic architecture.', 5, 'qutub-minar', 'https://images.unsplash.com/photo-1545231499-9e8538b7d4bb?q=80&w=1970&auto=format&fit=crop'),
('Red Fort', 'New Delhi', 'Delhi', (select id from public.categories where slug = 'heritage-monuments'), 'North India', 'Massive Mughal era fort in Old Delhi, built of red sandstone.', 6, 'red-fort', 'https://images.unsplash.com/photo-1596568779948-47e0e292d346?q=80&w=1974&auto=format&fit=crop'),
('Agra Fort', 'Uttar Pradesh', 'Agra', (select id from public.categories where slug = 'heritage-monuments'), 'North India', 'A massive Mughal fort complex near the Taj Mahal.', 8, 'agra-fort', 'https://images.unsplash.com/photo-1588607172084-375971488c0a?q=80&w=1974&auto=format&fit=crop'),
('Fatehpur Sikri', 'Uttar Pradesh', 'Agra', (select id from public.categories where slug = 'heritage-monuments'), 'North India', 'Abandoned Mughal capital with grand architecture and historical significance.', 15, 'fatehpur-sikri', 'https://images.unsplash.com/photo-1593540974868-de201886c99c?q=80&w=1974&auto=format&fit=crop'),
('Ellora & Ajanta Caves', 'Maharashtra', 'Aurangabad', (select id from public.categories where slug = 'heritage-monuments'), 'West India', 'Ancient rock-cut temples and caves, a UNESCO World Heritage site.', 12, 'ellora-ajanta-caves', 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1974&auto=format&fit=crop'),
('Hampi', 'Karnataka', 'Hampi', (select id from public.categories where slug = 'heritage-monuments'), 'South India', 'UNESCO site featuring the magnificent ruins of the Vijayanagara Empire.', 18, 'hampi', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop'),
('Khajuraho', 'Madhya Pradesh', 'Chhatarpur', (select id from public.categories where slug = 'heritage-monuments'), 'Central India', 'Famous for its intricate erotic sculptures and nagara-style architectural symbolism.', 20, 'khajuraho', 'https://images.unsplash.com/photo-1575881473210-928065cb2396?q=80&w=1974&auto=format&fit=crop'),
('Sanchi Stupa', 'Madhya Pradesh', 'Sanchi', (select id from public.categories where slug = 'heritage-monuments'), 'Central India', 'One of the oldest stone structures in India, a masterpiece of Buddhist art.', 25, 'sanchi-stupa', 'https://images.unsplash.com/photo-1628065792612-58849646b5dc?q=80&w=1974&auto=format&fit=crop'),
('Konark Sun Temple', 'Odisha', 'Konark', (select id from public.categories where slug = 'heritage-monuments'), 'East India', '13th-century temple designed as a colossal chariot of the Sun God.', 22, 'konark-sun-temple', 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1974&auto=format&fit=crop');

-- Royal Cities
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Jaipur', 'Rajasthan', 'Jaipur', (select id from public.categories where slug = 'royal-cities'), 'North India', 'The Pink City, known for Amber Fort, Hawa Mahal, City Palace and vibrant bazaars.', 3, 'jaipur', 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop'),
('Udaipur', 'Rajasthan', 'Udaipur', (select id from public.categories where slug = 'royal-cities'), 'North India', 'The City of Lakes, famous for its romantic palaces and shimmering Lake Pichola.', 9, 'udaipur', 'https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=2000&auto=format&fit=crop'),
('Jodhpur', 'Rajasthan', 'Jodhpur', (select id from public.categories where slug = 'royal-cities'), 'North India', 'The Blue City, dominated by the imposing Mehrangarh Fort.', 14, 'jodhpur', 'https://images.unsplash.com/photo-1563804867950-b472a1e4d07d?q=80&w=1974&auto=format&fit=crop'),
('Jaisalmer', 'Rajasthan', 'Jaisalmer', (select id from public.categories where slug = 'royal-cities'), 'North India', 'The Golden City in the Thar Desert, known for its living fort and havelis.', 16, 'jaisalmer', 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1974&auto=format&fit=crop'),
('Mysore', 'Karnataka', 'Mysore', (select id from public.categories where slug = 'royal-cities'), 'South India', 'Known for the opulent Mysore Palace and rich royal heritage.', 28, 'mysore', 'https://images.unsplash.com/photo-1688626785834-8b6522c00223?q=80&w=1974&auto=format&fit=crop'),
('Gwalior', 'Madhya Pradesh', 'Gwalior', (select id from public.categories where slug = 'royal-cities'), 'Central India', 'History comes alive in its massive fort and palaces.', 35, 'gwalior', 'https://images.unsplash.com/photo-1634827918386-89689f417f7b?q=80&w=2038&auto=format&fit=crop');

-- Beaches & Relaxation
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Goa', 'Goa', 'Goa', (select id from public.categories where slug = 'beaches-relaxation'), 'West India', 'Famous for its beaches, water sports, vibrant nightlife, and Portuguese heritage.', 2, 'goa', 'https://images.unsplash.com/photo-1564758913987-2e11e3b2a75d?q=80&w=1932&auto=format&fit=crop'),
('Puri', 'Odisha', 'Puri', (select id from public.categories where slug = 'beaches-relaxation'), 'East India', 'Golden beaches and the sacred Jagannath Temple.', 30, 'puri', 'https://images.unsplash.com/photo-1596261545642-1e96720f4b30?q=80&w=1932&auto=format&fit=crop'),
('Varkala', 'Kerala', 'Varkala', (select id from public.categories where slug = 'beaches-relaxation'), 'South India', 'Stunning cliffs overlooking the Arabian Sea, known for ayurveda and relaxation.', 24, 'varkala', 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1932&auto=format&fit=crop'),
('Andaman Islands', 'Andaman & Nicobar', 'Port Blair', (select id from public.categories where slug = 'beaches-relaxation'), 'Islands', 'Pristine beaches, crystal clear waters, and world-class scuba diving.', 19, 'andaman-islands', 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop'),
('Gokarna', 'Karnataka', 'Gokarna', (select id from public.categories where slug = 'beaches-relaxation'), 'South India', 'A temple town with pristine, laid-back beaches like Om Beach.', 32, 'gokarna', 'https://images.unsplash.com/photo-1620706240081-42e1d0825da2?q=80&w=2070&auto=format&fit=crop');

-- Nature & Adventure
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Kerala Backwaters', 'Kerala', 'Alleppey', (select id from public.categories where slug = 'nature-adventure'), 'South India', 'Tranquil houseboat cruises through lush green canals and spice villages.', 4, 'kerala-backwaters', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop'),
('Manali', 'Himachal Pradesh', 'Manali', (select id from public.categories where slug = 'nature-adventure'), 'North India', 'Adventure hub offering snowy landscapes, trekking, and mountain valleys.', 11, 'manali', 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1974&auto=format&fit=crop'),
('Ladakh', 'Ladakh', 'Leh', (select id from public.categories where slug = 'nature-adventure'), 'North India', 'High-altitude cold desert, Pangong Lake, and Buddhist monasteries.', 10, 'ladakh', 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop'),
('Rishikesh', 'Uttarakhand', 'Rishikesh', (select id from public.categories where slug = 'nature-adventure'), 'North India', 'Yoga capital of the world and a hub for white water rafting on the Ganges.', 13, 'rishikesh', 'https://images.unsplash.com/photo-1517260739337-6799d2ccfa23?q=80&w=2070&auto=format&fit=crop'),
('Coorg', 'Karnataka', 'Madikeri', (select id from public.categories where slug = 'nature-adventure'), 'South India', 'Coffee plantations, misty hills, and lush green landscapes.', 29, 'coorg', 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop'); -- Placeholder image

-- Spiritual / Pilgrimage
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Varanasi', 'Uttar Pradesh', 'Varanasi', (select id from public.categories where slug = 'spiritual-pilgrimage'), 'North India', 'One of the oldest living cities, famous for its Ghats and spiritual aura.', 7, 'varanasi', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop'),
('Amritsar', 'Punjab', 'Amritsar', (select id from public.categories where slug = 'spiritual-pilgrimage'), 'North India', 'Home to the Golden Temple, the holiest shrine of Sikhism.', 17, 'amritsar', 'https://images.unsplash.com/photo-1588094255554-e773539e6a0d?q=80&w=1974&auto=format&fit=crop'),
('Tirupati', 'Andhra Pradesh', 'Tirupati', (select id from public.categories where slug = 'spiritual-pilgrimage'), 'South India', 'Major pilgrimage site known for the Sri Venkateswara Temple.', 50, 'tirupati', 'https://images.unsplash.com/photo-1555461942-8c886c572b9a?q=80&w=1974&auto=format&fit=crop'),
('Madurai', 'Tamil Nadu', 'Madurai', (select id from public.categories where slug = 'spiritual-pilgrimage'), 'South India', 'Cultural soul of Tamil Nadu, famous for the Meenakshi Amman Temple.', 23, 'madurai', 'https://images.unsplash.com/photo-1585899986422-4876274092b3?q=80&w=1974&auto=format&fit=crop'),
('Bodh Gaya', 'Bihar', 'Bodh Gaya', (select id from public.categories where slug = 'spiritual-pilgrimage'), 'East India', 'The place where Lord Buddha attained enlightenment.', 40, 'bodh-gaya', 'https://images.unsplash.com/photo-1565545934665-276993c8346f?q=80&w=1974&auto=format&fit=crop'),
('Kedarnath', 'Uttarakhand', 'Kedarnath', (select id from public.categories where slug = 'spiritual-pilgrimage'), 'North India', 'A revered Shiva temple nestled in the Garhwal Himalayas.', 33, 'kedarnath', 'https://images.unsplash.com/photo-1598555620956-654817478052?q=80&w=2070&auto=format&fit=crop');


-- Urban & Culture
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Delhi', 'Delhi', 'New Delhi', (select id from public.categories where slug = 'urban-culture'), 'North India', 'A blend of ancient heritage, monuments, bustling markets, and modern culture.', 21, 'delhi', 'https://images.unsplash.com/photo-1506084931-c464e8e19574?q=80&w=1974&auto=format&fit=crop'),
('Mumbai', 'Maharashtra', 'Mumbai', (select id from public.categories where slug = 'urban-culture'), 'West India', 'The city of dreams, home to Bollywood, Marine Drive, and colonial architecture.', 26, 'mumbai', 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop'),
('Kochi', 'Kerala', 'Kochi', (select id from public.categories where slug = 'urban-culture'), 'South India', 'A mix of Dutch, Portuguese, and British history with Chinese fishing nets.', 27, 'kochi', 'https://images.unsplash.com/photo-1590050752117-9c60e3f01c23?q=80&w=2000&auto=format&fit=crop'),
('Puducherry', 'Puducherry', 'Puducherry', (select id from public.categories where slug = 'urban-culture'), 'South India', 'A touch of France in India with colonial villas and seaside promenades.', 31, 'puducherry', 'https://images.unsplash.com/photo-1616428753238-19e992762283?q=80&w=1974&auto=format&fit=crop'),
('Kolkata', 'West Bengal', 'Kolkata', (select id from public.categories where slug = 'urban-culture'), 'East India', 'The cultural capital of India, known for colonial architecture and literature.', 34, 'kolkata', 'https://images.unsplash.com/photo-1558431382-27e30314225d?q=80&w=1974&auto=format&fit=crop');

-- Wildlife & Eco-tourism
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Kaziranga', 'Assam', 'Kaziranga', (select id from public.categories where slug = 'wildlife-eco-tourism'), 'North East India', 'Home to the one-horned rhinoceros and diverse wildlife.', 36, 'kaziranga', 'https://images.unsplash.com/photo-1620133284768-be922fd5cdb7?q=80&w=2070&auto=format&fit=crop'),
('Ranthambore', 'Rajasthan', 'Sawai Madhopur', (select id from public.categories where slug = 'wildlife-eco-tourism'), 'North India', 'One of the best places to see Bengal tigers in the wild.', 37, 'ranthambore', 'https://images.unsplash.com/photo-1588514936336-613d115e5864?q=80&w=1974&auto=format&fit=crop'),
('Jim Corbett', 'Uttarakhand', 'Ramnagar', (select id from public.categories where slug = 'wildlife-eco-tourism'), 'North India', 'India''s oldest national park, famous for tigers and elephants.', 38, 'jim-corbett', 'https://images.unsplash.com/photo-1605581788753-463872173549?q=80&w=2070&auto=format&fit=crop'),
('Periyar', 'Kerala', 'Thekkady', (select id from public.categories where slug = 'wildlife-eco-tourism'), 'South India', 'Famous for its elephant reserve and tiger reserve.', 39, 'periyar', 'https://images.unsplash.com/photo-1580131652179-1383e580a80c?q=80&w=2070&auto=format&fit=crop');

-- Desert & Rural Experiences
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Pushkar', 'Rajasthan', 'Pushkar', (select id from public.categories where slug = 'desert-rural'), 'North India', 'Famous for its Camel Fair, Brahma Temple, and hippie vibe.', 41, 'pushkar', 'https://images.unsplash.com/photo-1571594895689-d10294fc6b04?q=80&w=2071&auto=format&fit=crop'),
('Kutch', 'Gujarat', 'Bhuj', (select id from public.categories where slug = 'desert-rural'), 'West India', 'The Great Rann of Kutch, a white salt desert famous for the Rann Utsav.', 42, 'kutch', 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2072&auto=format&fit=crop'),
('Shekhawati', 'Rajasthan', 'Mandawa', (select id from public.categories where slug = 'desert-rural'), 'North India', 'Open-air art gallery famous for frescoed havelis.', 43, 'shekhawati', 'https://images.unsplash.com/photo-1627916607164-7b5220c812d4?q=80&w=2028&auto=format&fit=crop');

-- Hill Stations
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Ooty', 'Tamil Nadu', 'Ooty', (select id from public.categories where slug = 'hill-stations'), 'South India', 'Queen of Hill Stations in the Nilgiris.', 44, 'ooty', 'https://images.unsplash.com/photo-1548680464-9e320d7f42d2?q=80&w=1932&auto=format&fit=crop'),
('Darjeeling', 'West Bengal', 'Darjeeling', (select id from public.categories where slug = 'hill-stations'), 'East India', 'Famous for tea gardens, toy train, and Kanchenjunga views.', 45, 'darjeeling', 'https://images.unsplash.com/photo-1566373735102-1436fdbe7e3c?q=80&w=1974&auto=format&fit=crop'),
('Munnar', 'Kerala', 'Munnar', (select id from public.categories where slug = 'hill-stations'), 'South India', 'Sprawling tea plantations and misty mountains.', 46, 'munnar', 'https://images.unsplash.com/photo-1616429382604-9467d586716a?q=80&w=1856&auto=format&fit=crop');

-- Offbeat
insert into public.destinations (name, state, city, category_id, region, description, popularity_rank, slug, image_url) values
('Spiti Valley', 'Himachal Pradesh', 'Kaza', (select id from public.categories where slug = 'offbeat'), 'North India', 'Rugged cold desert with ancient monasteries.', 47, 'spiti-valley', 'https://images.unsplash.com/photo-1566806584282-37887413d964?q=80&w=2070&auto=format&fit=crop'),
('Ziro Valley', 'Arunachal Pradesh', 'Ziro', (select id from public.categories where slug = 'offbeat'), 'North East India', 'Lush green valley famous for the Ziro Music Festival.', 48, 'ziro-valley', 'https://images.unsplash.com/photo-1624003203498-8ec12f71661d?q=80&w=1974&auto=format&fit=crop'),
('Majuli', 'Assam', 'Majuli', (select id from public.categories where slug = 'offbeat'), 'North East India', 'World''s largest river island, known for its Vaishnavite monasteries.', 49, 'majuli', 'https://images.unsplash.com/photo-1628186103348-26f6eb8b7156?q=80&w=1932&auto=format&fit=crop');
