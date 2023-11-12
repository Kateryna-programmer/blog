import article1 from '../assets/images/article-bg-1.jpeg';
import article2 from '../assets/images/bg-article-2.jpg';
import article3 from '../assets/images/bg-article-3.webp';
import article4 from '../assets/images/article-bg-4.jpeg';
import article5 from '../assets/images/bg-article-5.jpg';
import article6 from '../assets/images/bg-article-6.webp';
import article7 from '../assets/images/bg-article-7.jpeg';
import article8 from '../assets/images/bg-article-8.jpg';
import article9 from '../assets/images/bg-article-9.webp';
import article10 from '../assets/images/bg-article-10.webp';
import article11 from '../assets/images/bg-article-11.webp';
import article12 from '../assets/images/bg-article-12.jpg';
import article13 from '../assets/images/bg-article-13.jpg';
import article14 from '../assets/images/bg-article-14.webp';
import article15 from '../assets/images/bg-article-15.png';

type ArticleData = {
  id: number;
  imageUrl: string;
  author: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  description: string;
  inSidebar: string;
  full?: string;
};

const articlesArray: ArticleData[] = [
  {
    id: 1,
    inSidebar: 'no',
    alt: 'article 1',
    imageUrl: article1,
    category: 'Fashion',
    date: 'Oct 12, 2023',
    author: 'Charlie Teather',
    title: '10 autumn fashion trends 2023',
    description:
      "If you're eager to see what your wardrobe might look like this autumn keep reading, because thanks to the world's four fashion capitals -that's New York, London, Milan...",
    full: `<div>
  <p>
    If you're eager to see what your wardrobe might look like this
    autumn keep reading, because thanks to the world's four fashion
    capitals - that's New York, London, Milan and Paris - who are
    always ahead of the curve, autumn/winter 2023's fashion trends
    were forecasted way back in February.
  </p>
  <p>
    These are the key sartorial takeaways to prep yourself for the new
    season…
  </p>
  <h2>1. PERPETUAL PLEATING</h2>
  <p>
    One of the simplest ways to elevate a look, pleating is back in a
    big way this season. Whether you opt for a soft, draped pleat à la
    Loewe or a more intricate, dense pleat like Paco Rabanne and Rokh,
    it's a great way to add a sense of texture without
    overcomplicating a look through various different fabrics or
    layers. Keep the rest of your outfit relatively monochrome in
    order to let the pleating do the talking.
  </p>
  <h2>2. THE NEW PEPLUM</h2>
  <p>
    Buckle up, folks, because you didn't misread that. The peplum is
    officially back on the fashion map (we did warn you that you might
    need a while to digest these trends before you trial them!), and
    whether or not you were into them first time around you'd be wise
    not to disregard the look this season. Creating a beautiful
    silhouette, the traditional fit-and-flare shape of a peplum piece
    renders it universally flattering, and is a great way to dress up
    an otherwise more understated look.
  </p>
  <h2>3. QUIET LUXURY</h2>
  <p>
    One of the easiest trends to get on board with this autumn/winter,
    quiet luxury has been gaining pace on the sartorial scene over
    recent months. Essentially the opposite of flamboyant displays of
    wealth via logos and instantly-recognisable designer prints, this
    is about the art of subtlety. From timeless vests to blazers and
    even simply well-cut jeans, quiet luxury will be one of the wisest
    trends to follow this season thanks to its timeless longevity.
  </p>
  <h2>4. RED ALERT</h2>
  <p>
    People always want to know about ‘the colour of the season’, and
    while fuchsia is still having its moment thanks to the Barbie
    movie there's no doubt amongst fashion insiders that the real
    on-trend hue for autumn is red. Not a soft red, not a ruby, a
    crimson or a burgundy, but good old fashioned scarlet. Wear it
    head-to-toe for bonus points.
  </p>
  <h2>5. SHEER REVELATIONS</h2>
  <p>
    Yes, we know, it's the trend that won't give up. But with
    designers forever pushing the boundaries with sheer dressing, it's
    no wonder we don't get bored. This season you're going to have to
    put on your big girl pants - both literally and figuratively - as
    the sheer trend is all about revealing yours. That's right, there
    are no modest slip dresses or cool trousers slung beneath these
    sheer sheaths - baring your briefs will be big this autumn.
  </p>
  <h2>6. THE LBC</h2>
  <p>
    One of the most wearable trends of the season, the LBC (Long Black
    Coat) is the coolest outerwear option for autumn. While
    impractical floor scrapers may be at the top of the list when it
    comes to runway trends, there's no need for yours to be sweeping
    the pavements every time you leave the house. Opt for one that
    falls just above the ankle like Victoria Beckham's for an easy
    throw-on piece that won't look tired before October even hits.
  </p>
  <h2>7. MOODY BLOOMS</h2>
  <p>
    Many of us love florals come spring and summer (Miranda
    Priestly-aside, of course), but have you ever considered them an
    autumnal staple? That's all about to change, with moodier-hued
    blooms having taken centre stage on the AW23 runways. Go for those
    with a deep base colour - black or charcoal grey, ideally - and
    let the floral pop on top. Whether it's one bloom or a few, it's a
    guaranteed way to brighten up the fashion landscape in the depths
    of winter.
  </p>
  <h2>8. TIGHTS IN SIGHT</h2>
  <p>
    We'd be lying if we said we weren't into all of these
    practicality-first trends emerging from the designer catwalks.
    Next up, it's tights. Not the subtle nude ones, or the functional
    black pair you reach for every time the temperature dips into
    single digits. No, these are shout-about-it, out-there pairs of
    tights that were made to be seen. Bright reds were all over the
    runways this season, but there really are no rules here. Red,
    blue, pink, green, white… we're here for them all.
  </p>
  <h2>9. BUTTER STICKS</h2>
  <p>
    A slightly subtler, but no less beautiful, colour trend emerging
    for autumn is this buttery, pastel-y yellow-y gold tone. Worn
    head-to-toe it often also ticks off the ‘quiet luxury’ trend too
    as it exudes such subtle elegance, but it's also one of the
    easiest shades to wear. Unlike the slightly louder trend for
    scarlet red, this is a more subdued colour trend which is a lot
    less intimidating to step into.
  </p>
  <h2>10. SCARF SWATHES</h2>
  <p>
    Undoubtedly less tempting as those of us in the UK sit here
    basking in 28°C (it happens less often than once in a blue moon,
    let us have it), trust us when we say give it a few months and
    we'll all be buying blanket-sized scarves and Googling the chicest
    ways to wrap ourselves up in them. Whether you go super simple à
    la Michael Kors with a muted hue slung casually over one shoulder,
    or you go punchier like Saint Laurent and Gabriela Hearst via
    vibrant hues and prints and a fuller-coverage drape, it's hard to
    go wrong with this one.
  </p>
</div>`,
  },
  {
    id: 2,
    inSidebar: 'yes',
    alt: 'article 2',
    imageUrl: article2,
    category: 'Health',
    date: 'Oct 15, 2023',
    author: 'Pete McCall',
    title: 'The Benefits of Exercise on Mental Health',
    description:
      'If you’ve been contemplating becoming more physically active, it’s important to recognize that regular exercise can not only help you look better...',

    full: ` <div>
  <p>
  
    If you’ve been contemplating becoming more physically active, it’s
    important to recognize that regular exercise can not only help you
    look better, it can help you feel better, too. Here are six ways
    exercise can help improve your overall mental health and outlook.
  </p>
  <ul>
    <li>
      Exercise increases the production of brain-derived neurotrophic
      factor (BDNF), a neurotransmitter that can stimulate production of
      new brain cells. Both cardiorespiratory and muscular training can
      help elevate levels of BDNF, which means that these forms of
      exercise not only help you become more physically fit, but they
      can also boost your brain health.
    </li>
    <li>
      Exercise improves memory and learning and reduces or slows
      progressive loss to brain cell structure and function. In
      addition, exercise improves brain health by enhancing its ability
      to grow and adapt in response to stimuli (neuroplasticity) by
      reorganizing its connections, structure and functions. In other
      words, exercise may ameliorate some of the inescapable
      brain-related changes that occur with aging. Improvements in
      cognitive function and neuroplasticity can be observed in both
      young and old and both healthy and clinical populations. While
      cardiorespiratory and muscular training create unique
      neurophysiological adaptations, the combination of both types of
      exercise leads to more exercise-induced neuroplasticity than
      either mode alone. In other words, different types of exercise
      improves brain health by targeting various aspects of brain
      function.
    </li>
    <li>
      Exercise can help boost self-esteem, which may positively affect
      your mental health. Learning how to perfect that yoga pose,
      finally doing a pull-up with your own body weight or lifting a
      certain amount of weight for the first time can leave you with the
      feeling that you can achieve specific tasks that you set out to
      accomplish, which is one of the best ways to boost self-esteem.
    </li>
    <li>
      How awesome do you feel after a good night’s sleep? Sleep is when
      your body repairs itself after the challenges of the day and is an
      important component of good mental health. A good night’s sleep is
      also critical for your brain to recharge and refresh, and regular
      exercise can enhance your quality of sleep, which can leave you
      feeling great all day long.
    </li>
    <li>
      In this non-stop world, where you’re constantly being texted,
      emailed and generally pulled in all directions, having the
      opportunity to take time out of your day to focus on you may help
      improve mental health. Time spent exercising is an opportunity to
      unplug from other people and listen to your favorite music or
      catch up on your favorite hobby via a podcast. This, in turn, can
      help you change how you feel and improve your overall outlook.
    </li>
    <li>
      Taking group fitness classes or simply being at a gym surrounded
      by other people working toward improving their health can help you
      connect with others, which is an important component of good
      mental health. If you’re new to an area or going through a major
      life change such as a break-up, your workout time can be the best
      opportunity for meeting new people and making new friends. Many
      fitness studios and group classes become mini-communities and are
      an excellent way to improve your real-life social network, which
      can have an immediate impact on your mental health.
    </li>
  </ul>
  <p>
    Research strongly suggests that improved mental health is an
    important and often-overlooked outcome of regular exercise. It’s
    also important to note that you don’t need to pay for an expensive
    health membership or fitness classes to receive the mental health
    benefits of exercise. If your clients or participants have been
    looking for a little extra motivation to get moving, let them know
    that exercise can help them feel better and improve their overall
    outlook on life.
  </p>
</div>`,
  },
  {
    id: 3,
    inSidebar: 'no',
    alt: 'article 3',
    imageUrl: article3,
    category: 'Health',
    date: 'Sep 04, 2023',
    author: 'Daniel J. Green',
    title: 'Selfcare and Stress Management',
    description:
      'Developing positive self-care habits can help people better manage their stress and improve their overall well-being. Here, we’ll explore the importance of mindfulness...',
    full: `<div>
  <p>
    Developing positive self-care habits can help you and your clients
    to better manage stress and improve overall well-being. So, what is
    self-care? Stated simply, self-care is the practice of taking action
    to preserve or improve your own health. It can come in countless
    forms, from meditation and yoga practice to physical activity or
    even carving out time to read a good book. Here, we’ll explore the
    importance of mindfulness, sleep and social connectedness to stress
    reduction and offer some strategies for you to put into practice or
    share with your clients—or both.
  </p>
  <h2>Practice Mindfulness</h2>
  <p>
    Mindfulness practices may offer a host of physical, psychological
    and social benefits that can lead to decreases in perceived stress,
    improved self-efficacy, enhanced emotional regulation and a greater
    sense of meaning and purpose in life.
  </p>
  <p>
    Relaxation counters the short-term effects of stress by decreasing
    blood pressure, heart rate, respiration rate and muscle tension.
    Over the long-term, relaxation can mitigate certain health issues,
    including hypertension, anxiety and even cancer, in addition to
    improving overall health and healing.
  </p>
  <p>
    Here are some mindful practices that you and your clients might want
    to try:
  </p>
  <ul>
    <li>
      Mindful movement, such as yoga, tai chi, qigong, walking or
      cycling: Your clients might be surprised to learn that one of the
      two common aspects of practices that elicit relaxation is
      repetition, as is experienced during exercises like walking and
      cycling.
    </li>
    <li>
      Meditation: This can include any of a number of types of
      meditation, which you may encourage your clients to research.
      While some people thrive with an ongoing transcendental meditation
      practice, others may simply want a way to get 10 or 15 minutes of
      quiet time or prayer during a stressful period. This is where the
      second aspect of practices that elicit relaxation comes in—a
      passive disregard of thoughts as they arise.
    </li>
    <li>
      Breathing exercises: Again, there are a number of breathing
      exercises that clients can explore, including diaphragmatic
      breathing and pursed-lip breathing. Check out these 6 Breathing
      Exercises to Reduce Stress.
    </li>
  </ul>
  <p>
    If you want to learn more about the connection between breathing
    practices and meditation, check out this video from ACE expert
    Carrie Myers: Breath and Meditation.
  </p>
  <h2>Sleep</h2>
  <p>
    Sleep disordersare common in modern society, with one in three U.S.
    adults reporting that they usually get less than the recommended
    amount of sleep. Improving sleep patterns can be part of every
    healthy behavior-change program. Sleep deficiency has been linked to
    a variety of chronic health risks, including heart disease, obesity,
    high blood pressure, diabetes and depression.
  </p>
  <p>
    Share the following tips with your clients to help them get a good
    night’s sleep:
  </p>
  <ul>
    <li> Create a relaxing sleep environment. </li>
    <li>Follow a consistent sleep schedule. </li>
    <li>Follow a soothing bedtime routine.</li>
    <li>Limit exposure to bright light, especially blue light.</li>
    <li>Try to be exposed to natural light early in the day. </li>
    <li>Exercise daily.</li>
    <li>Avoid caffeine and alcohol.</li>
    <li>Avoid eating a large meal too close to bedtime.</li>
  </ul>
  <h3>Social Connectedness</h3>
  <p>
    The importance of social connectedness cannot be overstated.
    According to the Centers for Disease Control and Prevention, “Social
    connectedness influences our minds, bodies, and behaviors—all of
    which influence our health and life expectancy.”
  </p>
  <p>
    As a health coach or exercise professional, one of the best things
    you can do to help alleviate a client’s feelings of loneliness,
    anxiousness or depression is to provide a positive experience each
    time you interact with them. Also, encourage your clients to find
    workout partners, join healthy cooking classes or simply get out and
    hang out with friends.
  </p>
</div>`,
  },
  {
    id: 4,
    inSidebar: 'no',
    alt: 'article 4',
    imageUrl: article4,
    category: 'Astrology',
    date: 'Jan 19, 2023',
    author: 'Ragnar Malento',
    title: 'Mysteries Of Your Sun And Rising Signs',
    description:
      'When you explore the world of astrology, you’re likely to come across the terms “Sun sign,” “Moon sign,” and “Rising sign” (also known as your Ascendant)...',
    full: `<div>
  <p>
    When you explore the world of astrology, you’re likely to come
    across the terms “Sun sign,” “Moon sign,” and “Rising sign” (also
    known as your Ascendant). These three elements are key components of
    your astrological profile and hold the key to unlocking the
    mysteries of your personality and life. In this user-friendly guide,
    we’ll delve into the profound significance of your Sun, Moon, and
    Rising signs.
  </p>
  <h2>Understanding the Basics:</h2>
  <p>
    Before we dive into the mysteries, let’s clarify what each of these
    signs represents:
  </p>
  <ul>
    <li>
      <b>Sun Sign:</b> This is the sign most people are familiar with.
      It’s determined by the position of the Sun at the time of your
      birth and reflects your core identity, ego, and vitality. Your Sun
      sign shapes your fundamental traits and is often considered your
      “zodiac sign.”
    </li>
    <li>
      <b>Moon Sign:</b> Your Moon sign is associated with your emotions,
      instincts, and subconscious. It’s determined by the position of
      the Moon at your birth and reveals the emotional facets of your
      personality.
    </li>
    <li>
      <b>Rising Sign (Ascendant):</b> The Rising sign is the zodiac sign
      that was on the eastern horizon at the moment of your birth. It
      represents your outward personality, how you appear to others, and
      your first impressions.
    </li>
  </ul>
  <h3>The Sun Sign – Your Core Identity:</h3>
  <p>
    Your Sun sign is your astrological essence, the foundation of your
    personality. It influences your basic character traits, how you
    express yourself, and your life goals. Here’s a glimpse of the
    mysteries it holds:
  </p>
  <ul>
    <li>
      <b> Elemental Energy:</b> Your Sun sign can be one of four
      elements: Fire, Earth, Air, or Water, each with its own qualities.
      Fire signs are passionate and enthusiastic, while Earth signs are
      practical and grounded, and so on.
    </li>
    <li>
      <b>Modality: </b>Sun signs also fall into one of three modalities:
      Cardinal, Fixed, or Mutable. Cardinal signs are initiators, Fixed
      signs are steadfast, and Mutable signs are adaptable.
    </li>
    <li>
      <b>Ruling Planet:</b> Each Sun sign is associated with a ruling
      planet. For instance, Leo is ruled by the Sun, giving Leos a
      natural flair for leadership and creativity.
    </li>
  </ul>
  <h3>The Moon Sign – Your Emotional Depth:</h3>
  <p>
    While your Sun sign represents your external self, your Moon sign
    delves into the emotional undercurrents that shape your inner world.
    Here are the mysteries your Moon sign holds:
  </p>
  <ul>
    <li>
      <b>Emotional Reactions:</b> Your Moon sign influences how you
      react emotionally to situations. For example, a Cancer Moon is
      sensitive and nurturing, while an Aries Moon is more impulsive and
      assertive.
    </li>
    <li>
      <b> Relationships:</b> Understanding your Moon sign can shed light
      on your emotional needs in relationships. It can help you connect
      on a deeper level with yourself and your loved ones.
    </li>
    <li>
      <b>Instincts: </b>Your Moon sign influences your instincts and
      instincts play a crucial role in decision-making. Knowing your
      Moon sign can help you make choices that resonate with your
      emotional truth.
    </li>
  </ul>
  <h3>The Rising Sign (Ascendant) – Your First Impression:</h3>
  <p>
    Your Rising sign is like the mask you wear when you first meet
    someone. It shapes your initial reactions, appearance, and how
    others perceive you. Here’s how your Rising sign holds its
    mysteries:
  </p>
  <ul>
    <li>
      <b> Physical Appearance:</b> Your Rising sign can influence your
      physical features, making you resemble others with the same Rising
      sign.
    </li>
    <li>
      <b> First Impressions:</b> It affects the way you come across to
      new people. For instance, a Virgo Rising may appear
      detail-oriented and organized upon first meeting.
    </li>
    <li>
      <b> Life Path: </b>Your Rising sign can provide insights into your
      life path and the experiences you’ll encounter.
    </li>
  </ul>
  <p>
    Your Sun, Moon, and Rising signs are the cornerstones of your
    astrological identity. They hold the key to the mysteries of your
    personality, emotions, and first impressions. By unraveling these
    mysteries, you can gain a deeper understanding of yourself, your
    relationships, and your life path. Embrace the richness of your
    astrological triad and use it as a tool for self-discovery and
    personal growth.
  </p>
</div>`,
  },
  {
    id: 5,
    inSidebar: 'no',
    alt: 'article 5',
    imageUrl: article5,
    category: 'Psychology',
    date: 'Aug 15, 2023',
    author: 'Melissa Madeson',
    title: 'How to Overcome Fear of Abandonment: 6 Helpful Worksheets',
    description:
      'As humans, we depend on others for survival. Starting from birth, the need to be fed, bathed, clothed, sheltered, and cared for is essential for...',
    full: `<div>
  <p>
    As humans, we depend on others for survival. Starting from birth,
    the need to be fed, bathed, clothed, sheltered, and cared for is
    essential for survival and optimal function.
  </p>
  <p>
    Fortunately, if signs and symptoms of abandonment fears are
    identified and addressed, there are a variety of treatment options
    and paths to emotional healing, leading to a life of flourishing.
  </p>
  <h2>What Is Fear of Abandonment in Psychology?</h2>
  <p>
    Fear of abandonment is not a clinical diagnosis in and of itself. It
    is a form of anxiety and a symptom of several clinical disorders,
    including both mood and personality disorders. Individuals who
    experience abandonment are also more likely to have long-term mental
    health issues (Schoenfelder et al., 2011).
  </p>
  <p>
    Those who struggle with abandonment issues have a persistent fear of
    rejection or isolation. It is often characterized by codependency,
    insecurity, and maladaptive views of power, competence, and
    intimacy, which makes interpersonal relationships and daily
    functioning difficult (D’Rozario & Pilkington, 2021).
  </p>
  <h3>Anxiety</h3>
  <p>
    Anxiety is a foundational component of abandonment fear. Individuals
    who struggle with generalized anxiety disorder or other anxiety
    disorders are more likely to experience fear of abandonment in close
    relationships (Conradi et al., 2016).
  </p>
  <h3>Depression</h3>
  <p>
    Also known as major depressive disorder, depression involves feeling
    sad, a loss of interest in pleasurable activities, changes in sleep
    or weight, loss of energy, feeling worthless or guilty, and
    difficulty concentrating or making decisions. Individuals with
    depression may push people away, question if they are loved or
    worthy of love, and fear rejection from others. Depression can be
    both a cause and effect of abandonment fears. People who have
    experienced neglect or abandonment may struggle with depression, and
    people who are depressed are more likely to have fears of
    abandonment.
  </p>
  <h3>Post-traumatic stress disorder (PTSD)</h3>
  <p>
    As with depression, PTSD is closely tied with fear of abandonment.
    Symptoms of PTSD include disturbing memories, dreams, feeling
    emotionally numb or cut off from others, irritability, emotional
    dysregulation, and difficulty concentrating (Pilkington et al.,
    2020). Difficulty controlling emotions and feeling distant from
    others naturally lead to feelings of isolation and fear of being
    alone or abandoned. Trauma can also be caused by being abandoned,
    neglected, or abused, creating a vicious cycle if left untreated.
  </p>
  <h3>Signs of Fear of Abandonment</h3>
  <p>Signs of abandonment issues in children include:</p>
  <ul>
    <li>
      Acting “clingy” or experiencing emotional dysregulation when left
      alone
    </li>
    <li>
      Excessively worrying or panicking about losing someone close
    </li>
    <li>Generally fearing being alone</li>
    <li>Getting sick more often due to stress</li>
    <li>
      <i>Pushing people away.</i> This presents as withdrawal,
      exhibiting trust issues, and the inability to be open and honest
      with loved ones.
    </li>
    <li>
      <i>Codependency.</i> Codependency is when individuals rely on
      other people to meet all their emotional needs. People who become
      overly needy and possessive in relationships are often
      codependent.
    </li>
    <li>
      <i>Anger.</i>People with abandonment issues might allow others to
      get close to them but then become aggressive, reactive, or
      volatile if they feel threatened or upset
    </li>
  </ul>
  <h3>How to Overcome Fear of Abandonment</h3>
  <p>
    Individuals who seek help can improve personal wellbeing and
    interpersonal relationships.
  </p>
  <h3>5 Therapy treatment options</h3>
  <ul>
    <li>
      Attachment-based therapy uses a supportive client–therapist bond
      to address issues with mental health, such as depression and
      anxiety. It targets thoughts, feelings, behaviors, and
      interpersonal communication that clients avoid or over-amplify
      based on early-developed attachment styles (Pilkington et al.,
      2021).
    </li>
    <li>
      Behavioral therapy incorporates talk therapy to root out unhealthy
      behaviors and habits that are related to the mental health
      conditions underlying the fear of abandonment.
    </li>
    <li>
      Cognitive-Behavioral Therapy (CBT) helps clients identify faulty
      thinking patterns or cognitive distortions and replace them with
      more adaptive thinking patterns. This evidence-based form of
      therapy is effective at treating anxiety and depression and
      improving relationships through changing perspectives and
      communication patterns.
    </li>
    <li>
      Psychodynamic therapy encourages clients to identify and resolve
      unhealthy unconscious and conscious thoughts about past
      experiences. Through improving self-awareness and understanding,
      clients can see how their past may influence present thoughts and
      behaviors and make changes.
    </li>
    <li>
      Psychoeducation provides information to a client regarding a
      diagnosis, treatment options, and underlying theories (such as
      attachment theory) that may contribute to abandonment fears.
      Often, understanding and labeling problematic behaviors and fears
      can be one of the most helpful steps in healing.
    </li>
  </ul>
</div>`,
  },
  {
    id: 6,
    inSidebar: 'yes',
    alt: 'article 6',
    imageUrl: article6,
    category: 'Fashion',
    date: 'Oct 19, 2023',
    author: 'Londi Ncube',
    title: '5 London Fashion Week designers on your radar in 2024',
    description:
      'The undisputed home of young talent, London Fashion Week is nothing if not a showcase for the up-and-coming major names. But with...',
    full: `<div>
  <p>
    The undisputed home of young talent, London Fashion Week is nothing if
    not a showcase for the up-and-coming major names. But with a schedule
    bursting full with almost 100 shows, how do you spot the names to
    know?
  </p>
  <p>
    Luckily for you, we've done all the legwork. Introducing the five
    names you should have on your radar in 2024 (and beyond)…
  </p>
  <h2>TOLU COKER</h2>
  <p>
    For her debut solo collection Tolu Coker took us back to her
    motherland. The collection was a celebration of African spirituality
    featuring feminine cuts and tailoring staples that felt like a breath
    of fresh air following the quiet luxury mood of last season.
  </p>
  <p>
    She had us drooling over timeless wardrobe pieces that were given an
    energetic makeover, from denim to the chicest modern mini styles. The
    prints, silhouettes and accessories are still on our minds and truly
    enough to get anyone excited about head-to-toe dressing.
  </p>
  <h3>AHLUWALIA</h3>
  <p>
    Priya Ahluwalia is not new to the LFW line-up but has become one of
    the most hyped up shows of the season, for good reason. Upcycling and
    sustainability is the centre of her design process. The designer uses
    deadstock garments, locally sourced vintage and pre-loved pieces to
    create new designs inspired by her multi-ethnic background.
  </p>
  <p>
    The colours were bold yet romantic with delicate prints and fabrics
    which were well balanced with new-age cowboy boots. With successful
    brand collaborations like Mulberry, Ganni and Adidas under her belt,
    we’re excited to see Ahluwalia continue being a force for
    (sustainable) fashion.
  </p>
  <h3>JOHANNA PARV</h3>
  <p>
    Johanna Parv, also part of the Fashion East collective, has created
    her own innovative design aesthetic which is not only functional but
    very chic. With an impressive CV including fashion brands Balenciaga,
    Christian Dior and Burberry, she is a pro in well constructed pieces.
    Johanna Parv is best known for her monochrome palette, functionality
    and comfort.
  </p>
  <p>
    Light-weight jackets and remixed leggings are given a contemporary
    makeover, making them essentials to any capsule wardrobe. Perfectly
    designed with balance, the collection is ideal dressing for those who
    wish they could live in gym clothes, but fashion. In a nutshell it is
    the most fabulous cycling wear you have ever seen.
  </p>
  <h3>YUHAN WANG</h3>
  <p>
    Yuhan Wang is a Central St Martins graduate (which is always a good
    sign) and has been a favourite during London Fashion Week since her
    debut show in 2020. The designer set out to explore and challenge
    Asia’s traditional standards about femininity through clothes and how
    these connect to Western Culture.
  </p>
  <p>
    You can expect romantic lace and knit separates, exaggerated
    silhouettes and floral prints that feel soft yet empowering. Hailey
    Bieber and Kylie Jenner are already big fans of this cult London brand
    and have worn they’re most coveted pieces which are known for being
    revealing but covered up - an it-girl mood. Her collections are always
    a masterclass in vibrant layering with romantic blazers, gloves,
    removable collars.
  </p>
</div>`,
  },
  {
    id: 7,
    inSidebar: 'no',
    alt: 'article 7',
    imageUrl: article7,
    category: 'Psychology',
    date: 'Jun 29, 2023',
    author: 'Pete McCall ',
    title: '6 Ways High Intensity Exercise Makes Your Brain Stronger',
    description:
      'Here are six benefits of high-intensity exercise that may help improve cognitive function and potentially reduce one’s risk of developing diseases like...',
    full: `<div>
  <p>
    Here are six benefits of high-intensity exercise that may help
    improve cognitive function and potentially reduce one’s risk of
    developing diseases like Alzheimer’s or dementia.
  </p>
  <ul>
    <li>
      <h2>High-Intensity Exercise May Help Build More Brain Cells</h2>
      <p>
        Brain-derived neurotrophic factor (BDNF) is a protein that
        promotes the growth of new brain cells and the formation of
        neuronal circuits in the brain, and is associated with both
        improved memory and learning ability. A review of the literature
        on high-intensity interval training (HIIT) found that HIIT can
        elevate levels of BDNF immediately after exercise and while at
        rest. This means that the same workouts that can help your
        clients get fitter might help make their brains function better
        as well.
      </p>
    </li>
    <li>
      <h2>
        High-Intensity Exercise May Offer More Brain Benefits Than
        Moderate-Intensity Exercise
      </h2>
      <p>
        High-intensity exercise has been shown to produce a greater BDNF
        response than moderate-intensity exercise. Schmolesky, Webb and
        Hansen compared the effects of the intensity and duration of
        exercise on BDNF levels and found that higher intensity
        protocols produced a greater response, reporting that “vigorous
        conditions had the highest proportion of subjects that
        experienced a significant increase in BDNF levels.” Likewise,
        Marquez and colleagues compared 20-minute bouts of continuous
        exercise at 70% of maximal work-rate to a HIIT protocol of 90%
        of maximal work-rate for work and recovery intervals of one
        minute each. They observed that “shorter bouts of high-intensity
        exercise are slightly more effective than continuous
        high-intensity exercise for elevating BDNF.”
      </p>
    </li>
    <li>
      <h2>High-Intensity Exercise Increases Blood Flow to the Brain</h2>
      <p>
        High-intensity exercise not only improves blood flow to the
        working muscles, but it also increases blood flow to the brain,
        which is important for delivering the oxygen and glucose needed
        for optimal performance. Plus, increasing oxygen flow to the
        brain can increase alertness while reducing feelings of fatigue,
        which could help enhance overall job performance. This means
        that a lunchtime HIIT workout could potentially help a client be
        more productive when they return to work in the afternoon.
      </p>
    </li>
    <li>
      <h2>Strength Training May Make You Smarter</h2>
      <p>
        Strength training—high-intensity or otherwise—has been shown to
        help increase BDNF levels. Church and colleagues compared the
        effects of a high-intensity strength-training program to one
        that focused on the volume of exercise and found that both
        protocols elevated BDNF. According to the study authors,
        “Results indicate that BDNF concentrations are increased after
        an acute bout of resistance exercise, regardless of training
        paradigm, and are further increased during a seven-week program
        in experienced lifters.”
      </p>
    </li>
    <li>
      <h2>
        High-Intensity Exercise Makes It Easier to Achieve a Flow State
      </h2>
      <p>
        A HIIT workout provides the right triggers, including clear
        goals and unambiguous feedback, to initiate something often
        referred to as the flow state, which can help create a positive
        and focused mindset that carries over into other aspects of a
        client’s daily life.
      </p>
    </li>
    <li>
      <h2>
        Performing High-Intensity Exercise Enhances Self-Confidence
      </h2>
      <p>
        Completing a challenging HIIT workout can help give clients the
        confidence to accomplish other daunting tasks. Once a client has
        completed a series of challenging high-intensity exercises,
        professional tasks such as giving a presentation or making a
        cold call to a potential client may seem easy by comparison.
        Additionally, completing a couple of HIIT workouts could help
        clients realize that they can exercise successfully, which is an
        important component for establishing self-efficacy and long-term
        adherence to an exercise program.
      </p>
    </li>
  </ul>

  <p>
    Finally, another oft-cited benefit of high-intensity exercise,
    particularly HIIT workouts, is that they don’t last as long as
    traditional workouts, which has been shown to be preferable among
    exercisers. Thum and colleagues compared HIIT to moderate-intensity
    continuous exercise and observed that HIIT may be more preferable
    because “individuals report greater enjoyment due to its time
    efficiency and constantly changing stimulus.” Ultimately, the most
    effective workout is the one that is completed, and a shorter
    workout is often more “doable” than a longer one.
  </p>
</div>`,
  },
  {
    id: 8,
    inSidebar: 'yes',
    alt: 'article 8',
    imageUrl: article8,
    category: 'Health',
    date: 'Mach 02, 2023',
    author: 'Nancy Clark',
    title: 'Why Carbohydrates So Confusing For Us',
    description:
      'Carbohydrates can be a source of confusion for athletes and fitness enthusiasts alike, many of whom believe they should avoid pasta, bagels,juice, bananas, sugar...?',
    full: `    <div>
  <p>
    Carbohydrates can be a source of confusion for athletes and fitness
    enthusiasts alike, many of whom believe they should avoid pasta,
    bagels, juice, bananas, sugar... the list goes on. In reality,
    people who are physically inactive whose bodies do not readily
    metabolize carbohydrates may need to take a different approach to
    consuming carbohydrates compared to regular exercisers and athletes.
    Here’s some information to help resolve carbohydrate confusion.
  </p>
  <h2>What do you actually mean when you say “carbs”?</h2>
  <p>
    Carbohydrates include both sugars and starches; they are
    biochemically similar. For example, an unripe banana (or any fruit)
    is starchy. As it ripens, it becomes sweeter; the starch converts
    into sugar. In comparison, peas (and other vegetables) are sweet
    when young and their sugar converts into starch as they mature. All
    forms of sugar and starch digest into the simple sugar glucose.
    Glucose travels in the blood and, with the help of insulin, is taken
    up for fuel by the muscles to fuel your workouts. Fit bodies handle
    carbohydrates better than unfit bodies.
  </p>
  <h2>Are carbs bad for you?</h2>
  <p>
    Regarding health, some carbs are better for you than others because
    some offer more nutrients than others. Even though refined sugar
    adds “empty calories” to a sports diet, you need not eat a
    sugar-free diet to have a healthy diet. A physically fit, healthy
    person’s menu can accommodate 10% of calories from refined sugar
    (World Health Organization’s guidelines). Yet, if you frequently
    consume sweets plus sports drinks, gels, and sports candies, you can
    easily consume more than 250 to 350 calories (10% of calories) from
    refined sugar. The fear-mongering terms of unhealthy, toxic, and
    poisonous that surround conversations regarding carbohydrates are
    simply unscientific. People who lack knowledge about physiology
    accept this disease-mongering, anti-sugar rhetoric. But the fact is
    no one food is healthy or unhealthy.
  </p>
  <h2>Are carbs fattening?</h2>
  <p>
    Despite popular belief, carbohydrates are not inherently fattening.
    Excess calories are fattening.
  </p>
  <h2>What about high-fructose corn syrup?</h2>
  <p>
    High-fructose corn syrup (HFCS) is less evil than is often portrayed
    by the media. HFCS is a double molecule comprised of 45% glucose,
    55% fructose—the same as honey and similar to white sugar (50%
    glucose, 50% fructose). The negative hype about HFCS applies
    primarily to people who consume excessive calories of sweets, soda,
    candies, and processed foods sweetened with HFCS. While no one needs
    excessive, lack-luster calories that could be better spent on
    nutrient-rich fruits, veggies, and whole grains, does an athlete
    really need to fret about a few calories of HFCS in ketchup?
  </p>
  <h2>What about sugar “crashes”?</h2>
  <p>
    The most common reason for “sugar crashes” (hypoglycemia) among
    athletes relates to running out of fuel. The shakiness and sweats
    are because the athlete did not eat enough food to maintain normal
    blood glucose levels, and the brain is now demanding sugar. One
    marathoner, who thought the 100-calorie gel he consumed at mile 16
    caused him to “crash,” more likely needed 200 to 300 calories to
    meet his energy needs. A sharp rise in blood sugar that may occur
    after eating sugary foods is not pathological and has more to do
    with the efficiency of the muscles and liver in their ability to
    take up the sugar. Exercise enhances the transport of sugar from
    your blood into your muscles with far less insulin than needed by
    the body of a person who is physically inactive.
  </p>
  <h2>Summary</h2>
  <p>
    For physically active, fit people who are at lower risk for heart
    disease, diabetes, and obesity, sugar and carbs are not toxic and
    may be a helpful way to enhance athletic performance. The
    one-size-diet does not fit all. No one is suggesting that you or
    your clients should eat more sugar, but rather understand that
    athletes and people who are regularly physically active can embrace
    a way of eating that includes an appropriate balance of carbohydrate
    (sugars and starches) in each meal. Strive for a healthy eating
    pattern that includes 85-90% quality foods and 10-15% whatever. Some
    days, whatever might be an apple; other days, it might be a slice of
    apple pie.
  </p>
</div>`,
  },
  {
    id: 9,
    inSidebar: 'no',
    alt: 'article 9',
    imageUrl: article9,
    category: 'Astrology',
    date: 'Mach 03, 2023',
    author: 'Ayanika Das',
    title: 'Signs Your Closest Friend Might Be Your Perfect Life Partner',
    description:
      'You’ve known your best friend for years. You share secrets, dreams, and countless laughter. You’ve always appreciated their presence in your life, but...?',
    full: ` <div>
  <p>
    You’ve known your best friend for years. You share secrets, dreams,
    and countless laughter. You’ve always appreciated their presence in
    your life, but have you ever wondered if they could be your perfect
    life partner? This blog explores how astrology can help you uncover
    the signs that your closest friend might just be the one you’ve been
    looking for.
  </p>
  <ol>
    <li>
      <h2>Cosmic Compatibility</h2>
      <p>
        Astrology, the ancient science of the stars, can offer insights
        into your compatibility with someone. When two people are close
        friends and their astrological signs align, it’s a powerful sign
        that they may be perfect life partners. Whether it’s your sun,
        moon, or rising sign, astrology can reveal if your cosmic
        energies are in sync.
      </p>
    </li>
    <li>
      <h2>Shared Goals and Dreams</h2>
      <p>
        One of the most significant indicators of a potential life
        partner is the alignment of your long-term goals and dreams.
        Your closest friend may share similar aspirations, making it
        easier to navigate the complexities of life together. It’s like
        two puzzle pieces that fit perfectly.
      </p>
    </li>
    <li>
      <h2> Emotional Connection</h2>
      <p>
        A deep emotional connection is a vital element of any romantic
        relationship. If your closest friend provides you with
        unwavering support, understands your moods, and is your go-to
        person during tough times, they might just be your perfect life
        partner in the making.
      </p>
    </li>
    <li>
      <h2>Communication is Effortless</h2>
      <p>
        In any successful relationship, communication is key. If you and
        your closest friend can have meaningful conversations without
        any struggle, it’s a good indication that you have a strong
        foundation for a deeper, more intimate connection.
      </p>
    </li>
    <li>
      <h2>You Share Hobbies and Interests</h2>
      <p>
        Shared interests can strengthen a bond between two people. If
        you and your best friend enjoy the same hobbies, activities, or
        passions, it can create a sense of unity and compatibility that
        extends beyond friendship.
      </p>
    </li>
    <li>
      <h2>You’re Supportive of Each Other’s Growth</h2>
      <p>
        Partners who genuinely care about each other’s personal growth
        and well-being are more likely to have a successful life
        partnership. If your closest friend encourages your
        self-improvement and vice versa, it’s a sign that they may be
        your perfect life partner.
      </p>
    </li>
    <li>
      <h2> You’re Each Other’s Confidants</h2>
      <p>
        Close friends often serve as confidants, but if your friend is
        the first person you turn to with your joys and sorrows, it
        could be a sign of a deeper connection waiting to blossom.
      </p>
    </li>
    <li>
      <h2>Unspoken Understanding</h2>
      <p>
        Sometimes, you and your closest friend may have an unspoken
        understanding of each other’s needs and desires. This unspoken
        connection could be the foundation of a lasting and fulfilling
        romantic partnership.
      </p>
    </li>
  </ol>
  <h2>Astrological Insights:</h2>
  <p>
    Astrology can provide valuable guidance in identifying these signs.
    Here are a few astrological aspects to consider:
  </p>
  <ul>
    <li>
      <b> Sun Signs:</b> Compatibility between your sun signs can reveal
      your basic personality traits and how well they mesh.
    </li>
    <li>
      <b> Moon Signs: </b>These indicate your emotional needs and how
      they align with your friend’s.
    </li>
    <li>
      <b> Venus Signs:</b> Venus represents love and attraction. Check
      how your Venus signs interact.
    </li>
    <li>
      <b> Rising Signs:</b> Your rising signs show how you present
      yourself to the world. Complementing rising signs can lead to a
      more harmonious relationship.
    </li>
  </ul>
  <p>
    In summary, the signs that your closest friend might be your perfect
    life partner go beyond ordinary friendship. Astrology can shed light
    on your compatibility and potential for a fulfilling romantic
    relationship. If you find a strong alignment in the astrological
    aspects mentioned above, it’s worth exploring the idea of taking
    your relationship to the next level. Your best friend could be your
    perfect life partner in the stars.
  </p>
  <p>
    So, take a moment to reflect on your closest friendship and consult
    the cosmos for guidance. It might just lead you to the perfect life
    partner you’ve been seeking all along.
  </p>
</div>`,
  },
  {
    id: 10,
    inSidebar: 'no',
    alt: 'article 10',
    imageUrl: article10,
    category: 'Fashion',
    date: 'Oct 27, 2023',
    author: 'Elle Turner',
    title: 'Dark Velvet Hair Is The Winter Colour you Need To Try',
    description:
      'While food and drinks have headlined the major beauty trends recently (latte makeup, strawberry girl, mocha nails), textures are taking us...?',
    full: ` <div>
  <p>
    While food and drinks have headlined the major beauty trends
    recently (latte makeup, strawberry girl, mocha nails), textures are
    taking us into winter. And dark velvet hair is here to pick up where
    latte left off. We already saw cashmere blonde pick up a fan base
    last year, but for 2023 velvet is most definitely ruling the beauty
    trends.
  </p>
  <p>
    Velvet makeup has picked up a fan base that includes Selena Gomez,
    Tina Kunakey and Rosie Huntington-Whiteley. And velvet nails is
    limbering up to topple glazed donut nails from the top spot after a
    year plus in first place. The mani trades a chrome sheen for a soft
    sparkle, plus it offers extra nuzzly dimension that feels sumptuous,
    luxurious and perfect for the colder seasons.
  </p>
  <p>
    The same goes for our hair colours. With the sun setting earlier and
    less daylight to enjoy, we are embracing the natural shift to
    moodier hues, like mocha, cherry cola and red velvet. In fact, we're
    loving black velvet and navy velvet for that matter, too. For
    autumn-winter, we're seeing lots of hair shades come through that
    are classic velvet shades. And you can play them up with the finish
    of your hair, too. Semi-matte strands pair perfectly in contrast to
    the ultra glossy, liquid shine we've been seeing lots of, so
    mattifying hairsprays and texturisers can add extra semi-soft
    dimension.
  </p>
  <h2>Dark velvet red</h2>
  <p>
    We didn't think red hair could get any hotter but for winter, dark
    red velvet hair is showing us otherwise. Like most hair colours,
    there is a seasonal shift for ginger strands: “The natural
    progression goes from soft coppers into stronger coppers [for the
    autumn]; then into punchier reds [for winter] — and we are already
    seeing this clear direction,” says trend forecaster and top London
    hair stylist, Tom Smith. So, we’re seeing richer velvet reds,
    instead of the ambery coppers of earlier seasons.
  </p>
  <p>
    If you aren’t a natural redhead and are thinking ahead to the
    grow-out phase, worry not. LA hair stylist, Dhairius Thomas, says
    that this colour will look even more eye-catching with time,
    especially if you have dark brown roots as it’ll create an edgy
    black to red ombré look.
  </p>
  <div style='display: flex; justify-content: center '>
    <img style='max-height: 300px'
      src="https://i.pinimg.com/736x/32/f8/20/32f82092f1a03f9bb951e8eaeb621e9c.jpg"
      alt="hair"
    />
    <img style='max-height: 300px'
      src="https://media.allure.com/photos/652ffc0f160be50d03a046b2/master/w_1600%2Cc_limit/darkredhair.png"
      alt="hair"
    />
    <img style='max-height: 300px'
      src="https://i1.wp.com/www.hadviser.com/wp-content/uploads/2022/07/22-dark-ginger-hair-color-CZzeQXTOKBS.jpg?resize=1037%2C1319&ssl=1"
      alt="hair"
    />
  </div>
  <h2>Black velvet</h2>
  <p>
    Ultra dark brunettes and midnight black make a rich, striking
    statement while still feeling classic and wearable. We’ve noticed
    celebs skipping licks of honey and caramel highlights for a moodier,
    cooler palette that’s a little flatter and less dimensional, but
    it’s luxe and intentional.
  </p>
  <div style='display: flex; justify-content: center '>
    <img style='max-height: 300px'
      src="https://n1s1.hsmedia.ru/f6/9d/f7/f69df712cf30386d1794ee15575672df/1080x1350_0xWV6YhLhN_2597991198510897650.jpg"
      alt="hair"
    />
    <img style='max-height: 300px'
      src="https://makeup.ru/storage/articles/109182/conversions/8WNRUFiEbRZypCTe844gkVwJqDtH4DESj941ywIT-content_front.jpg"
      alt="hair"
    />
    <img style='max-height: 300px'
      src="https://n1s1.hsmedia.ru/a0/73/82/a07382fefef16b89bd669b99bfddbfd8/1080x1350_0xWjmtNmhv_5612093568630727393.jpg"
      alt="hair"
    />
  </div>
  <h2>Navy and purple velvet</h2>
  <p>
    We’re predicting navy blue will eventually take over as an
    alternative shade that’s only one step away from a classic like
    black and dark brunette, plus it leans into the mystical movement
    that’s been growing in momentum. Or, if you want to go a little more
    offbeat opulent purples and amethysts are perfect.
  </p>
  <div
  style='display: flex; justify-content: center; padding: 20px 0 '
  >
    <img style='max-height: 300px'
      src="https://i.pinimg.com/originals/77/43/b3/7743b30db7f6613d2e16ae0cb30d0798.png"
      alt="hair"
    />
    <img style='max-height: 300px'
      src="https://i.pinimg.com/originals/d0/4c/1b/d04c1b1c78a70dc61e88906fce7b9f08.jpg"
      alt="hair"
    />
    <img style='max-height: 300px'
      src="https://media.allure.com/photos/5aaad4a77a73fd2b02ff3a96/1:1/w_3024,h_3024,c_limit/smoked%20velvet%20hair%202.jpg"
      alt="hair"
    />
  </div>
</div>`,
  },
  {
    id: 11,
    inSidebar: 'no',
    alt: 'article 11',
    imageUrl: article11,
    category: 'Fashion',
    date: 'Oct 31, 2023',
    author: 'Georgia Trodd',
    title: 'These Black Friday designer deals are the best we`ve ever seen',
    description:
      'If you`re a savvy shopper when it comes to your sartorial purchases over Cyber Week, you`ll know to wait until today for the best Black Friday...',
    full: `  <div>
  <p>
    If you're a savvy shopper when it comes to your sartorial purchases
    over Cyber Week, you'll know to wait until today for the best Black
    Friday designer deals to drop. We're definitely guilty of spending
    an hour+ scrolling through Net-A-Porter each evening, and we love
    nothing more than wandering around Harrods on a weekend. But, more
    often than not, it's exactly that: window shopping.
  </p>
  <p>
    It's no secret that times are more than hard right now, so if you
    don't need anything, don't be pressured into spending. We know
    that's easier said than done – especially when we, ourselves, are
    presenting you with so many temptations – but we're also here to
    remind you that if you're going to shop the sales, shop them wisely.
    Invest in the stuff that's going to serve you well (i.e. Black
    Friday coats and designer bag deals etc.); that you're going to wear
    or use forever.
  </p>
  <p>
    Top tip: quickly make a Black Friday designer deals wish list before
    you start shopping. Whether it's physical or virtual, fill your
    basket(s) with the pieces you actually want (plus any Christmas
    shopping/Christmas gifts you might need for your mum, sister, best
    friend or boyfriend). That means that you’ll have everything ready
    and raring to go, and you'll be less likely to throw caution to the
    wind.
  </p>
  <h2>Do designer shops do Black Friday? What about Cyber Monday?</h2>
  <p>
    As was the case last year, you don’t have to look hard to spot a
    designer deal over Black Friday and Cyber Monday. Sites like
    Net-A-Porter, Liberty London, LuisaViaRoma, Matchesfashion and The
    Outnet have actually already got promotions on so you can get brands
    including Valentino, Isabel Marant and Toteme for less. Your perfect
    chance to score a designer cross-body bag, pair of Prada loafers,
    wide leg jeans, Barbour jacket, investment trench coat or some
    cashmere knitwear for less.
  </p>
  <p>Want some inspo? We've got you below…</p>
  <h2>Early Black Friday designer deals: Coggles Black Friday Sale</h2>
  <p>
    In 2022, Coggles urged us all to treat ourselves with 30% off luxury
    brands over Black Friday, by using the code CG30 at checkout. Thank
    you very much, Coggles.
  </p>
  <p>
    There's already a sale happening now, though we expect it'll get
    much better by the time November 24th swings round. Or maybe even
    sooner…?
  </p>
  <h2>Early Black Friday designer deals: Farfetch Black Friday</h2>
  <p>
    Farfetch's sale is already active with up to 60% discounts. Last
    year, they topped it up with an extra 20% off for Cyber Monday. We
    were truly spoiled.
  </p>
  <p>
    Seen on the arm of every Instagram influencer, this Stella McCartney
    shoulder bag is nearly £400 off. What are you waiting for? Race you
    to check out.
  </p>
  <h2>
    Early Black Friday designer deals: Liberty London Black Friday
  </h2>
  <p>
    Liberty's Black Friday sale is on the horizon, but they're already
    offering up to 30% off womenswear, interiors/home and accessories
    like jewellery, plus 25% off select beauty/skincare brands. If
    you’re headed to any events this winter, this velvet RIXO dress is a
    day-to-night hero, and it's discounted by over £90.
  </p>
  <h2>Early Black Friday designer deals: LuisaViaRoma Black Friday</h2>
  <p>
    Currently offering up to 55% off full priced items, there are
    already great deals on plenty of designer brands over at
    LuisaViaRoma – including cult labels like Balmain and Manolo
    Blahnik.
  </p>
  <p>
    Last year come actual Black Friday, you could also take an extra 25%
    off everything that was already on sale (think The Frankie Shop and
    Stella McCartney) with no code necessary. It automatically applies
    before you checkout. We’ve got our eye on this Max Mara blazer and
    GANNI rollneck for winter events.
  </p>
  <h2>Early Black Friday designer deals: Coach Black Friday</h2>
  <p>
    Over at Coach's direct website last Black Friday, you could get 25%
    off with the code CYBER (including some shades of the iconic Pillow
    Tabby, FYI). You could also find 20% off women's Coach bags and
    purses/wallets over at John Lewis' Cyber Monday sales. So we're
    hoping for the same in 2023.
  </p>
  <h2>What is Black Friday and Cyber Monday?</h2>
  <p>
    Traditionally celebrated in America, Black Friday is the name given
    to the day following Thanksgiving in which many retailers offer big
    discounts and better sale prices compared to other offers throughout
    the year. It's become quite the event on this side of the pond, too,
    and for 2023, more brands getting involved and offering their best
    Black Friday UK offers yet. Cyber Monday is the Monday that follows
    Cyber Weekend (i.e. the Saturday and Sunday directly after Black
    Friday) and gives shoppers one final chance to save. The whole thing
    is arguably the biggest shopping event of the year.
  </p>
  <h2>When is Black Friday? When is Cyber Monday?</h2>
  <p>
    This year, Black Friday is on the 24th November with Cyber Monday
    falling on the 27th. See the best Black Friday fashion deals and
    clothing deals (where you'll find things like loungewear, hoodies,
    midi dresses and sweatshirts from brands like AllSaints, UGG, Mango
    and Nike), jewellery deals, beauty deals, homeware deals from
    high-end and high-street brands over on our best Black Friday deals
    hub page. It covers everything from new arrivals/new in pieces that
    are usually full price, to bestseller selected items.
  </p>
  <h2>
    Is there Black Friday for Dior? Does Louis Vuitton have Black Friday
    sale?
  </h2>
  <p>
    Unfortunately, if it’s Dior or Louis Vuitton you’re after, you’re
    out of luck. Exclusively stocked on the brand’s own websites, they
    don’t participate in Black Friday or Cyber Monday. We’d recommend
    looking on resale sites like Vestiaire and The Handbag Clinic for
    vintage and second-hand bags that might be more affordable, or keep
    saving up your hard-earned ££ until you can afford the saddle bag or
    Neverfull of your dreams!
  </p>
</div>`,
  },
  {
    id: 12,
    inSidebar: 'no',
    alt: 'article 12',
    imageUrl: article12,
    category: 'Astrology',
    date: 'Nov 02, 2023',
    author: 'Ayanika Das',
    title: 'Signs That Your Past Life Karma Is Catching Up',
    description:
      'Imagine waking up one day, and your life takes a perplexing turn. It feels like you’re caught in a whirlwind of events that you can’t explain...',
    full: `   <div>
  <p>
    Imagine waking up one day, and your life takes a perplexing turn. It
    feels like you’re caught in a whirlwind of events that you can’t
    explain. From an astrological and Vedic perspective, these sudden
    changes and experiences could be signs that your past life’s karma
    is catching up with you. In this article, we will explore the
    intriguing concept of past life karma and how it influences your
    present life. We’ll delve into specific signs and indicators that
    can help you recognize when your past life’s karma is making its
    presence felt in your current existence.
  </p>
  <h2>Unexplained Phobias and Aversions:</h2>
  <p>
    One of the most noticeable signs that past life karma is affecting
    you is when you experience unexplained phobias or strong aversions.
    For instance, you might have an intense fear of water or heights
    without any apparent reason. According to astrology and Vedic
    beliefs, these fears could be remnants of past life traumas that are
    surfacing in your current life.
  </p>
  <h2>Repeated Relationship Patterns:</h2>
  <p>
    If you find yourself repeatedly facing similar challenges or issues
    in your relationships, it could be a sign that your past life’s
    karma is at play. Perhaps you keep encountering the same type of
    person or experiencing the same relationship dynamics over and over
    again. This may indicate that unresolved karmic ties are manifesting
    in your present life.
  </p>
  <h2>Sudden and Unexplained Changes in Fortune:</h2>
  <p>
    Abrupt changes in your financial or personal circumstances can also
    be a sign of past life karma catching up with you. This could
    manifest as a sudden loss or gain of wealth, changes in social
    status, or unexpected career shifts. These dramatic changes may be
    linked to the karma you’ve carried over from previous lifetimes.
  </p>
  <h2>Persistent Health Issues:</h2>
  <p>
    Long-term or recurring health problems may be connected to your past
    life’s karma. While it’s essential to seek medical advice for any
    health issues, astrologers believe that certain health conditions
    can be influenced by unresolved karmic imprints from the past.
  </p>
  <h2>Strong Intuitions and Déjà Vu:</h2>
  <p>
    Have you ever experienced moments of déjà vu or strong intuitions
    about future events? These experiences may indicate that you’re
    tapping into your past life memories. According to Vedic and
    astrological beliefs, some individuals possess a heightened
    connection to their past lives, allowing them to access knowledge
    and insights from previous incarnations.
  </p>
  <h2>Unusual Dreams and Nightmares:</h2>
  <p>
    Unusual dreams, especially recurring ones, can offer glimpses into
    your past lives. If you often find yourself in vivid dreamscapes or
    experiencing nightmares related to certain historical periods or
    events, it could be a sign that your past life’s karma is trying to
    communicate with you through your dreams.
  </p>
  <h2>Strong Attraction or Aversion to Certain Places:</h2>
  <p>
    You may have a profound attraction or aversion to specific locations
    or cultures. This attraction could be linked to positive past life
    experiences, while aversions may result from past traumas in those
    places.
  </p>
  <h2>Karmic Relationships and Connections:</h2>
  <p>
    Meeting individuals who feel like ‘kindred spirits’ or ‘soulmates’
    might be part of your karmic journey. These connections are believed
    to be predestined, serving as opportunities to resolve karmic debts
    or fulfill past promises from previous lives.
  </p>
  <h2>Conclusion:</h2>
  <p>
    In the grand tapestry of life, the concept of past life karma plays
    a significant role. As we navigate the complexities of our present
    existence, we often find ourselves confronted with signs and
    experiences that hint at unresolved issues from past lives.
    Astrology wisdom provide valuable insights into understanding these
    signs, helping us recognize when our past life’s karma is catching
    up with us. Embracing these indicators can lead to personal growth
    and the opportunity to heal and balance our karmic debts, ultimately
    allowing us to move forward on our life’s journey with greater
    clarity and purpose.
  </p>
</div>`,
  },
  {
    id: 13,
    inSidebar: 'yes',
    alt: 'article 13',
    imageUrl: article13,
    category: 'Psychology',
    date: 'Apr 19, 2022',
    author: 'Dr. Erin Nitschke',
    title: 'Effective Stress Management Techniques for Better Living',
    description:
      'Stress. It’s the most pervasive and persistent phenomenon we experience in life. While not all sources of stress are negative, chronic stressors...',
    full: ` <div>
 <p>
   <b>Stress.</b> It’s the most pervasive and persistent phenomenon we
   experience in life. While not all sources of stress are negative,
   chronic stressors tax our personal health and well-being and
   ultimately reduce enjoyment and peace. The constant presence of
   negative stress may eventually result in a significant decline in
   personal health.
 </p>
 <p>
   It’s not possible to control everything related to what we
   experience or how we experience it. We can, however, employ simple
   stress management techniques and develop necessary skills that will
   not only help us face the stress beast but tame it as well. Apply
   these seven stress-busting techniques for better living.
 </p>
 <h2>Prioritize Movement</h2>
 <p>
   It’s no secret that physical activity naturally reduces stress and
   increases the release of the “feel good” hormones. Physical movement
   doesn’t always need to be structured exercise inside of a gym or
   studio. Instead, schedule time to be active. This can be a brisk
   walk, a set of body-weight exercises you can complete in 10 minutes
   in your office or living room, a yoga session or a light jog with a
   friend. Activity is only limited by the time you set aside for it.
   Further, active time can be as short as climbing a few flights of
   stairs and still elicit positive stress-reducing benefits.
 </p>
 <h2>Allow Yourself to Say, “No, thank you.”</h2>
 <p>
   The inability to say “no” or decline a task you don’t have time for
   is a common challenge for many. Consequently, this leads to
   increased levels of stress and anxiety. It is O.K. to say “No, thank
   you” or “I would love to help at a later date, but thank you for
   thinking of me.” One of the hurdles many of us face is neglecting to
   prioritize our own needs because we are busy attending to the needs
   of others (friends, family, work, extracurricular events, groups,
   etc.). Reevaluate the to-do list and organize the critically
   important aspects at the top and leave room for “you time.”
 </p>
 <h2>Set a Daily Affirmation</h2>
 <p>
   The first thing many do when the alarm goes off is to launch quickly
   into the daily process of getting ready for the day; this is a
   habitual and sometimes mindless ritual. Modify this recurring ritual
   to include a daily affirmation to guide your busy day. Simple
   phrases such as “I am grounded,” “I am centered” or “I am strong”
   can serve as a mindful compass that teaches us to challenge negative
   thoughts or unproductive thought patterns. Post daily affirmations
   on social media, whisper them to yourself, put them on a
   post-it-note in your office or add them as a note in your phone.
   Keep them close by as a reminder of your value and purpose.
 </p>
 <h2>Sleep</h2>
 <p>
   Though we think of it as rest, sleep is actually an active process.
   This is when the body works to repair, restore and rejuvenate the
   various systems of the body. It’s easy to believe one can run on six
   or fewer hours of sleep, but the body (and mind) vehemently
   disagree. A well-rested individual is more capable of combatting
   stress than an unrested individual. A lack of restorative sleep
   increases stress levels. To improve your sleep, start by creating a
   relaxing bed-time routine (lights dimmed and screens and digital
   devices set aside). Commit to going to bed and rising at consistent
   times and avoid consuming caffeine after 3 PM. Small tweaks may lead
   to big results.
 </p>
 <h2>Practice Authentic Acceptance</h2>
 <p>
   There’s a lot to be said for keeping a positive attitude and looking
   on the bright side. However, it’s equally important to be authentic
   in acknowledging how we feel. It is O.K. to allow emotions to come
   and go as they do naturally and not feel as though we need to shove
   them aside or stifle them for the sake of remaining positive. This
   is where a reflection journal can prove useful. Alternatively,
   verbally processing how you feel with a trusted friend or individual
   can relieve stress. Too often, people judge themselves harshly for
   feeling angry, disappointed or frustrated. Instead, work to accept,
   allow and avoid judgment.
 </p>
 <h2>Cultivate Creativity</h2>
 <p>
   Engaging in the creative process is a highly effective way to shift
   the mind’s focus, set fear aside and reduce stress. Too often,
   stress comes from feeling afraid, insecure or less than. Exploring
   your creative side helps to defy those negative feelings. Find
   something you enjoy—painting, writing, sculpting, engineering,
   designing, etc.—and set aside a window of time each week to pursue
   that activity.
 </p>
 <h2>Nourish</h2>
 <p>
   A long-term stress management technique is consuming a balanced
   diet. When stress levels are high, the desire for familiar comfort
   foods, simple sugars and processed items often increases. While
   these types of foods might feel desirable in the moment, they will
   not provide the nourishment the body needs to refuel and face (and
   therefore overcome) stressful events. Consistently consuming a diet
   that includes fiber, healthy amounts of fats, lean proteins, complex
   carbohydrates, fruits and vegetables, and low-fat dairy (or
   alternatives if one has a sensitivity to a specific food) is key to
   successfully managing stress over the long-term.
 </p>
 <p>
   Stress is a consistent part of life, but it doesn’t need to control
   the quality of it. Stress is manageable and containable, especially
   when we apply effective methods to face and tame it.
 </p>
</div>`,
  },
  {
    id: 14,
    inSidebar: 'no',
    alt: 'article 14',
    imageUrl: article14,
    category: 'Health',
    date: 'Sept 05, 2023',
    author: 'Jessica Beer',
    title: 'What Is Nervous System Regulation',
    description:
      'A cultural paradigm shift is happening in awareness of the mind–body connection. Ordinary people are talking about nervous system regulation...',
    full: ` <div>
  <p>
    A cultural paradigm shift is happening in awareness of the mind–body
    connection.
  </p>
  <p>Ordinary people are talking about nervous system regulation.</p>
  <p>
    People are using “dysregulation” as a catchall to describe how they
    feel when they are not on top of their game or to explain the
    behavior of their children or partner.
  </p>
  <p>
    What is so wonderful about this is the focus on the body. People are
    looking to the body to explain and relieve symptoms typically
    thought of as problems of the mind.
  </p>
  <p>
    This cultural shift has powerful and positive implications for
    treatment, and we’ll elaborate on the benefits and uses of nervous
    system regulation in this article.
  </p>
  <h2>What is nervous system regulation, and why is it important?</h2>
  <p>
    Nervous system regulation is a cascade of physiological responses
    our nervous system makes to reduce heightened states of arousal and
    increase states of calmness during times of distress.
  </p>
  <p>
    In practice, we often use the concept to describe downstream effects
    of changes in physiology on our behavior, social interactions,
    mental health, and learning. In a dysregulated state, our
    sympathetic and parasympathetic nervous systems are imbalanced. We
    feel we are at our limit, and it affects our ability to
    problem-solve, make rational decisions, and engage positively with
    others.
  </p>
  <h2>Techniques for Nervous System Regulation</h2>
  <p>
    There are deliberate, self-directed techniques that can be used in
    real time to establish a more relaxed state and push back on the
    physiological responses generated by the sympathetic nervous system.
  </p>
  <h2>Interoception</h2>
  <p>
    Interoception is our conscious awareness of our internal bodily
    sensations like hunger, emotions, heart rate, and pain.
    Interoception gives us our general sense of what is going on in our
    body. It guides how we respond to our environment based on our
    perception of our bodily states (Quadt et al., 2018).
  </p>
  <p>
    For example, recall how your body feels after a poor night’s sleep.
    How are your thinking and memory? How is your mood? Could you use
    this awareness to improve your sleep hygiene? The ability to
    recognize when you are experiencing dysregulation of your nervous
    system relies on interoception (Quadt et al., 2018).
  </p>
  <h2>Mindfulness meditation</h2>
  <p>
    Mindfulness is one form of meditative practice. It is widely used as
    a tool to regulate our nervous systems to reduce stress, improve
    focus, and improve our sleep. But how does it work?
  </p>
  <h2>Controlled breathwork</h2>
  <p>
    Neuroscientist Jack Feldman says, “One breath can shift your brain
    state” (Huberman, 2022). Our nervous system controls breathing, and
    we can bring it to conscious awareness to regulate our
    parasympathetic response.
  </p>
  <p>
    Patterns of inhales and exhales that differ in intensity and
    duration impact our heart rate, blood pressure, and oxygen levels in
    the blood. Current research supports the hypothesis of a causal
    relationship between the rhythm of our respiration and our
    perception of pain, stress reduction, and even memory retrieval
    (Ashhad et al., 2022).
  </p>
  <ul>
    <li>
      <h3>Slow breathing</h3>
      <p>
        Slow-breathing techniques are defined as those using fewer than
        10 breaths per minute (e.g., pranayama and paced breathwork).
        Slow breathing of fewer than six breaths per minute was related
        to increased heart rate variability, a sign of positive health
        and improved parasympathetic nervous system regulation (Zaccaro
        et al., 2018).
      </p>
    </li>
    <li>
      <h3>Box breathing</h3>
      <p>
        Box breathing, also called tactical breathing, is used by
        military and law enforcement to decrease physiological arousal
        during stressful and dangerous situations. Tactical breathing
        improves nervous system regulation by lowering heart rate and
        breathing rate (Röttger et al., 2021).
      </p>
    </li>
    <li>
      <h3> Cyclic sighing</h3>
      <p>
        Cyclic sighing, also called the physiological sigh, is a double
        inhale followed by a slow exhale. It works immediately on our
        autonomic nervous system by decreasing respiration rate.
      </p>
    </li>
    <li>
      <h3> Alternate nostril breathing</h3>
      <p>
        Alternate nostril breathing (ANB) is a breathing technique from
        hatha yoga that uses controlled breathwork to improve nervous
        system regulation. Left-nostril breathing decreases blood
        pressure and activates the parasympathetic nervous system.
        Right-nostril breathing brings blood pressure back to normal
        levels and activates the sympathetic nervous system.
      </p>
    </li>
  </ul>
  <h2>Yoga and exercise</h2>
  <p>
    Both yoga and exercise have profound effects on mental and physical
    health and encompass elements known to regulate the sympathetic
    response. Whereas yoga focuses on breath regulation, postures,
    relaxation, and meditation, exercise typically targets muscle
    strength and cardiovascular endurance.
  </p>
  <p>
    Yoga influences the stress response generated by the sympathetic
    nervous system by reducing cortisol levels, improving immune
    response, lowering heart rate, and/or decreasing blood pressure. The
    beneficial effects of yoga on the autonomic nervous system seem to
    be larger for clinical populations including individuals
    experiencing depression and anxiety, hypertension, and elevated
    blood glucose, as well as breast cancer survivors (Pascoe & Bauer,
    2015).
  </p>
</div>`,
  },
  {
    id: 15,
    inSidebar: 'no',
    alt: 'article 15',
    imageUrl: article15,
    category: 'Astrology',
    date: 'March 11, 2023',
    author: 'Tania Bhardwaj',
    title: 'Top 5 Zodiac Signs Who Are Born Clever',
    description:
      'When it comes to astrology, each of the twelve zodiac signs carries its own unique set of qualities and characteristics. Some signs are known...',
    full: ` <div>
  <p>
    Astrology has always been a subject of fascination, offering
    insights into our personalities, behaviors, and even our
    intellectual prowess. While it’s important to remember that
    astrology is more of a belief system than a science, many people
    find it intriguing to explore how their zodiac sign might influence
    their cleverness. In this article, we delve into the top 5 zodiac
    signs believed to be born clever.
  </p>
  <h2>Gemini (May 21 – June 20)</h2>
  <p>
    Cleverness seems to come naturally to Geminis. Ruled by Mercury, the
    planet of communication and intellect, Geminis are known for their
    sharp wit and versatility. They are quick learners, adaptable, and
    can effortlessly engage in intellectual conversations. Their ability
    to process information swiftly and their inquisitive nature make
    them clever problem solvers.
  </p>
  <p>
    Geminis have a knack for thinking outside the box, which often leads
    to innovative solutions. Whether it’s finding creative solutions at
    work or mastering complex subjects, Geminis shine as clever
    individuals who excel in diverse areas of life.
  </p>
  <h2>Virgo (August 23 – September 22)</h2>
  <p>
    Virgos are celebrated for their meticulous and analytical minds.
    Ruled by Mercury, they possess a deep desire for perfection and
    attention to detail. This sign excels in critical thinking, making
    them inherently clever. Their methodical approach to problem-solving
    ensures that they don’t overlook any details.
  </p>
  <p>
    Virgos are often found in careers that require precision, such as
    medicine, engineering, or accounting. Their cleverness lies in their
    ability to identify flaws and come up with practical solutions. They
    thrive on organization, and their sharp minds allow them to navigate
    complex tasks effortlessly.
  </p>
  <h2>Scorpio (October 23 – November 21)</h2>
  <p>
    Scorpios are born with an innate intensity and a profound sense of
    intuition. Ruled by Pluto and Mars, these individuals are both
    intelligent and fiercely determined. Their cleverness lies in their
    ability to read people and situations with remarkable accuracy.
    Scorpios can uncover hidden truths and solve complex puzzles with
    their exceptional deductive skills.
  </p>
  <p>
    Their keen perception makes them excellent problem solvers in
    various aspects of life. Whether it’s figuring out the motives of
    others or diving into intricate mysteries, Scorpios exhibit their
    cleverness through their investigative prowess.
  </p>
  <h2>Sagittarius (November 22 – December 21)</h2>
  <p>
    Sagittarians are known for their love of adventure and an
    unquenchable thirst for knowledge. Ruled by Jupiter, the planet of
    expansion and growth, they are constantly seeking new experiences.
    Their cleverness is rooted in their broad understanding of the world
    and their ability to connect seemingly unrelated ideas.
  </p>
  <p>
    Sagittarians are quick learners and excel in grasping complex
    concepts. Their open-mindedness and optimism drive them to explore
    diverse fields and develop creative solutions to problems. Their
    cleverness shines when they combine their expansive knowledge with
    their adventurous spirit.
  </p>
  <h2> Aquarius (January 20 – February 18)</h2>
  <p>
    Aquarians are often seen as the visionaries of the zodiac. Ruled by
    Uranus, the planet of innovation and rebellion, they possess an
    innate cleverness that’s out of the ordinary. Aquarians are driven
    by their desire to make the world a better place and have a unique
    ability to think ahead of their time.
  </p>
  <p>
    Their cleverness lies in their unconventional approach to
    problem-solving. Aquarians are known for their forward-thinking
    ideas and their ability to create groundbreaking solutions. Whether
    it’s in technology, science, or social change, their visionary minds
    set them apart.
  </p>
  <h2>Conclusion</h2>
  <p>
    While astrology can be an entertaining way to explore our
    personalities, it’s essential to remember that cleverness is not
    limited to specific zodiac signs. Every individual is unique and
    possesses their own set of skills and talents. Cleverness is not
    solely determined by astrological influences but is a product of a
    person’s experiences, education, and personal growth.
  </p>
  <p>
    In summary, Geminis, Virgos, Scorpios, Sagittarians, and Aquarians
    are believed to be the top 5 clever zodiac signs. However,
    cleverness knows no boundaries, and each one of us has the potential
    to be clever in our own way.
  </p>
  <p>
    By acknowledging and embracing your cleverness, you can make the
    most of your innate abilities, regardless of your zodiac sign. So,
    keep shining bright and stay clever in your unique way!
  </p>
</div>`,
  },
];

export default articlesArray;
