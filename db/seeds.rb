# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
category_list = [
    ["Taoism", "Taoism (/ˈtaʊ-/), or Daoism (/ˈdaʊɪzəm/), is a philosophical tradition of Chinese origin which emphasizes living in harmony with the Tao (Chinese: 道; pinyin: Dào; lit. 'Way', or Dao). In Taoism the Tao is the source, pattern and substance of everything that exists."], 
    ["Zen Buddhism", "Zen is a school of Mahayana Buddhism. It emphasizes rigorous self-restraint, meditation-practice, insight into the nature of mind (見性, Ch. jiànxìng, Jp. kensho, 'perceiving the true nature') and nature of things, and the personal expression of this insight in daily life, especially for the benefit of others."],
    ["Existentialism" "Existentialism is a form of philosophical inquiry that explores the problem of human existence and centers on the lived experience of the thinking, feeling, acting individual. In the view of the existentialist, the individual's starting point has been called 'the existential angst,' a sense of dread, disorientation, confusion, or anxiety in the face of an apparently meaningless or absurd world. Existentialist thinkers frequently explore issues related to the meaning, purpose, and value of human existence."], 
    ["Stoicism", "Stoicism is an ancient Greek school of philosophy founded at Athens by Zeno of Citium. The school taught that virtue, the highest good, is based on knowledge; the wise live in harmony with the divine Reason (also identified with Fate and Providence) that governs nature, and are indifferent to the vicissitudes of fortune and to pleasure and pain."],
    ["Transcendental Idealism", "Transcendental idealism is a doctrine founded by German philosopher Immanuel Kant in the 18th century. Kant's doctrine is found throughout his Critique of Pure Reason (1781). Kant argues that the conscious subject cognizes the objects of experience not as they are in themselves, but only the way they appear to us under the conditions of our sensibility."] 
]

category_list.each do |name, description|
    Category.create(name: name, description: description)
end

quote_list = [
    ["Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", "Lao Tzu", 1],
    ["The journey of a thousand miles begins with a single step.", "Lao Tzu", 1], 
    ["Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.", "Lao Tzu", 1], 
    ["A man with outward courage dares to die; a man with inner courage dares to live.", "Lao Tzu", 1], 
    ["Do you have the patience to wait until your mud settles and the water is clear?", "Lao Tzu", 1], 
    ["In Zen there must be satori; there must be a general mental upheaval which destroys the old accumulations of intellection and lays down the foundation for a new life; there must be the awakening of a new sense which will review the old things from a hitherto undreamed-of angle of observation.", "D.T. Suzuki", 2], 
    ["For while scientist and logician dissect and analyze, the mystic looks for meaning in the whole.", "Alan Watts", 2], 
    ["Life has to be freed and lived, instead of being known.", "Kobun Chino Otogawa", 2],
    ["Shohaku Okumura ~ We cannot expect any ecstasy greater than right here, right now—our everyday lives.", "Kosho Uchiyama Roshi", 2],
    ["The literal meaning of life is whatever you're doing that prevents you from killing yourself.", "Albert Camus", 3],
    ["I rebel; therefore I exist.", "Albert Camus", 3],
    ["No shepherd and one herd! Everybody wants the same, everybody is the same: whoever feels different goes voluntarily into a madhouse.", "Freidrich Nietzsche", 3], 
    ["I could not become anything; neither good nor bad; neither a scoundrel nor an honest man; neither a hero nor an insect. And now I am eking out my days in my corner, taunting myself with the bitter and entirely useless consolation that an intelligent man cannot seriously become anything, that only a fool can become something.", "Fyodor Dostoevsky", 3],
    ["Oh threats of Hell and Hopes of Paradise! One thing at least is certain - This Life flies; One thing is certain and the rest is Lies - The Flower that once has blown forever dies.", "Omar Khayyam", 3], 
    ["For death remembered should be like a mirror, Who tells us life’s but breath, to trust it error.", "William Shakespeare", 3],
    ["Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.", "Marcus Aurelius", 4], 
    ["Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.", "Seneca", 4],
    ["What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.", "Epictetus", 4],
    ["Stop wandering about! You aren't likely to read your own notebooks, or ancient histories, or the anthologies you've collected to enjoy in your old age. Get busy with life's purpose, toss aside empty hopes, get active in your own rescue-if you care for yourself at all-and do it while you can.", "Marcus Aurelius", 4], 
    ["It is not the man who has too little that is poor, but the one who hankers after more.", "Seneca", 4],
    ["But a lie is a lie, and in itself intrinsically evil, whether it be told with good or bad intents.", "Immanuel Kant", 5],
    ["The only thing permanent is change.", "Immanuel Kant", 5],
    ["Enlightenment is man's leaving his self-caused immaturity. Immaturity is the incapacity to use one's intelligence without the guidance of another. Such immaturity is self-caused if it is not caused by lack of intelligence, but by lack of determination and courage to use one's intelligence without being guided by another. Sapere Aude! Have the courage to use your own intelligence! is therefore the motto of the enlightenment.", "Immanuel Kant", 5],
    ["You only know me as you see me, not as I actually am.", "Immanuel Kant", 5],
    ["Always recognise that human individuals are ends, and do not use them as means to your end.", "Immanuel Kant", 5],
    ["Great minds think for themselves.", "Immanuel Kant", 5]
]

quote_list.each do |content, author, category_id|
    Quote.create!(content: content, author: author, category_id: category_id)
end