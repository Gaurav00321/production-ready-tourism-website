-- Seed Tours
insert into public.tours (title, duration, image, price, group_size, slug, inclusions, category) values
('Royal Rajasthan on Wheels', '7 Days / 6 Nights', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1927&auto=format&fit=crop', '$3,500', 'Luxury Train', 'royal-rajasthan', array['All Meals', 'Luxury Suite', 'Private Guide', 'Transport'], 'featured'),
('Spiritual Ganges Journey', '10 Days / 9 Nights', 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=2070&auto=format&fit=crop', '$1,800', 'Small Group', 'ganges-journey', array['Breakfast', '3-Star Hotels', 'Boat Rides', 'Yoga'], 'featured'),
('Kerala Ayurveda Retreat', '14 Days / 13 Nights', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2021&auto=format&fit=crop', '$2,200', 'Small Group', 'kerala-ayurveda', array['Wellness Meals', 'Resort Stay', 'Treatments', 'Consultation'], 'featured'),

('Grand Chola Temples', '5 Days / 4 Nights', 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop', '$900', 'Small Group', 'chola-temples', array['Breakfast', 'Heritage Hotels', 'Expert Guide', 'Transfers'], 'heritage'),
('Mughal Empire Trail', '6 Days / 5 Nights', 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop', '$1,100', 'Small Group', 'mughal-trail', array['Breakfast', '4-Star Hotels', 'Entry Fees', 'Guide'], 'heritage'),
('Cave Temples of Ajanta & Ellora', '4 Days / 3 Nights', 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1974&auto=format&fit=crop', '$750', 'Small Group', 'ajanta-ellora', array['Breakfast', 'Hotel Stay', 'Flights', 'Guide'], 'heritage'),

('Tiger Safari in Ranthambore', '3 Days / 2 Nights', 'https://images.unsplash.com/photo-1588514936336-613d115e5864?q=80&w=1974&auto=format&fit=crop', '$850', 'Small Group', 'ranthambore-safari', array['All Meals', 'Jungle Lodge', 'Jeep Safari', 'Naturalist'], 'nature'),
('Valley of Flowers Trek', '6 Days / 5 Nights', 'https://images.unsplash.com/photo-1628186103348-26f6eb8b7156?q=80&w=1932&auto=format&fit=crop', '$600', 'Small Group', 'valley-of-flowers', array['All Meals', 'Camping', 'Trek Guide', 'Permits'], 'nature'),
('Sundarbans Boat Jungle Safari', '4 Days / 3 Nights', 'https://images.unsplash.com/photo-1572097662444-658784b25667?q=80&w=1932&auto=format&fit=crop', '$550', 'Small Group', 'sundarbans', array['All Meals', 'Boat Stay', 'Permits', 'Guide'], 'nature');

-- Seed Destinations
insert into public.destinations (title, location, image, price, rating, slug, description, category) values
('The Taj Mahal, Agra', 'Agra, Uttar Pradesh', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop', '$1,200', 4.9, 'agra', 'Witness the timeless beauty of the Taj Mahal, a symbol of eternal love.', 'featured'),
('Kerala Backwaters', 'Alleppey, Kerala', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop', '$950', 4.8, 'kerala', 'Drift through the serene palm-fringed canals on a traditional houseboat.', 'featured'),
('Jaipur, The Pink City', 'Jaipur, Rajasthan', 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop', '$1,100', 4.8, 'jaipur', 'Explore magnificent forts, palaces, and vibrant bazaars in the heart of Rajasthan.', 'featured'),

('Golden Triangle Tour', 'Delhi, Agra, Jaipur', 'https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=2000&auto=format&fit=crop', '$1,500', 4.9, 'golden-triangle', 'The perfect introduction to India''s rich history and culture.', 'first-time'),
('Varanasi - Spiritual Capital', 'Varanasi, Uttar Pradesh', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop', '$800', 4.7, 'varanasi', 'Experience the spiritual essence of India on the banks of the Ganges.', 'first-time'),
('Goa Beaches', 'Goa', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop', '$1,000', 4.6, 'goa', 'Relax on pristine beaches and enjoy the vibrant nightlife and Portuguese heritage.', 'first-time'),

('Leh Ladakh Expedition', 'Ladakh', 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop', '$1,800', 5.0, 'ladakh', 'Conquer high passes and witness the stark beauty of the Himalayas.', 'adventure'),
('Rishikesh Rafting', 'Rishikesh, Uttarakhand', 'https://images.unsplash.com/photo-1517260739337-6799d2ccfa23?q=80&w=2070&auto=format&fit=crop', '$600', 4.8, 'rishikesh', 'Adrenaline-pumping white water rafting on the holy Ganges river.', 'adventure'),
('Andaman Islands Scuba', 'Andaman & Nicobar', 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop', '$2,200', 4.9, 'andaman', 'Dive into crystal clear waters and discover vibrant coral reefs.', 'adventure');
