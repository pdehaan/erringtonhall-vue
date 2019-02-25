<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <!-- breadcrumbs -->
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>
              <li class="is-active">
                <a href="#" aria-current="page">History</a>
              </li>
            </ul>
          </nav>
          <!-- /breadcrumbs -->

          <h1 class="title">A History of the Errington War Memorial Hall</h1>
          <p class="subtitle">
            On <strong>December 19th, 1919</strong> at a public meeting, it was
            decided that "There shall be a War Memorial at Errington in the
            shape of a Hall". Financed by bazaars, whist drives and concerts and
            constructed largely by volunteer labour and much donated material,
            the Errington War Memorial Hall opened its doors on
            <strong>March 22, 1922</strong>. A Board of Management was then
            elected - this group, the forerunners of the present Hall
            Association looked after the maintenance of the building and
            organized activities just as is done to this day.
          </p>
          <p>
            Events were lit by lanterns until a gas powered generator, the
            "Delco" arrived in 1926. This and other generators powered the Hall
            until hydro came to the area in <strong>1949</strong>. In 1933 the
            hall ceiling was installed. Spurred by a generous donation from
            <strong>Mrs. Braddock</strong>, the kitchen was added in 1937.
          </p>
          <p>
            Drama made its appearance soon after the Hall was opened and
            flourished with the hard work of
            <strong>Mr. H.F. "Bob" Butler</strong>. From the 1930's to the
            1950's, many Festivals were held and scores of young people got
            their first stage experience in Errington Hall. The Errington Drama
            Club was succeeded by the EDA Players (Errington Development
            Association), Little Mountain Theatre, Umbra and ECHO Players, now
            headquartered in Qualicum Beach.
          </p>
          <p>
            The Hayseed Jamboree Club was formed in <strong>1951</strong>. With
            their own orchestra, the group put on many dances, cabarets, fashion
            shows and masquerades in the Hall. Many events were so popular that
            people were often turned away at the door.
          </p>
          <p>
            In 1958, thanks to a B.C. Centennial grant and many hours of
            volunteer labour, a new hardwood floor was installed. This floor,
            after many sandings and re-finishings, survived till 2009 when it
            was replaced by a new floor of Canadian Maple.
          </p>
          <p>
            In 1969, the Errington War Memorial Hall Association was chartered
            as a non-profit society. The directors of that year were the first
            to plan a "Hi Neighbour Day" - a community day with proceeds going
            to the upkeep of the Hall.
          </p>
          <p>
            1972 saw the contruction of the Green Room, behind the stage, which
            was built in honour of H.F. Butler. In 1976-77 under a LIP grant,
            major improvements to the Hall were made in the form of insulation
            in the ceiling, a new shingle roof and ramps inside and out for the
            handicapped. Also constructed at this time were the chair storage
            area and the basement, soon to become home to the Errington
            Co-operative Preschool. The Preschool had been formed in
            <strong>1974</strong> to provide rural kids with contact with
            others.
          </p>
          <p>
            The small building next door to the Hall served the community as
            Fire Hall from the 1968 until the construction of the present
            structure on the highway in <strong>1975</strong>. In 1980-81 the
            "Old Fire Hall" was completely renovated. Insulation in the walls
            and ceiling and a wooden floor along with a built in screen and
            speakers have made it a favourite place for meetings, readings,
            lectures, arts &amp; crafts displays and films over the years.
          </p>
          <p>
            Originally used by First War soldiers on leave and Veterans for
            rehabilitation and recreation, the Community Park adjacent to the
            Hall, has been maintained and developed over the years by the Hall
            Association. The Park and the Ball Field have been the scene of many
            annual events and continues to be used by community groups to this
            day. In <strong>1993</strong>, due to the sale of the property
            across the road from Errington Store, the Errington Farmers Market
            (established in <strong>1972</strong> by
            <strong>Gerry Shaw</strong>) was relocated to the Community Park.
            Again, thanks to volunteer labour and largely donated materials,
            local produce, baked goods and craft items and a woodsy atmosphere,
            have made the Market regular community gathering spot every Saturday
            during the summer months.
          </p>
          <p>
            On the weekend of <strong>August 6th &amp; 7th, 1994</strong> the
            25th Annual Hi Neighbour Day was held in the Hall. This celebration,
            typical of past days featured a Pancake Breakfast, Arts & Crafts
            Display, Farmers Market, Parade, Lunch, Goods and Services Auction,
            Kid's Activities and a Dance. A special event this year was the
            Reunion Tea and Concert which brought together many seniors and
            former Errington residents to enjoy music and song performed by
            local entertainers familiar with the Hall's well-worn stage.
          </p>
          <p>
            March 22, 1997 saw another milestone in the Hall's lengthy history -
            as the community celebrated the Hall's 75th Birthday. Music, skits,
            readings and reminiscences and a giant birthday cake made the day a
            memorable one for young and old alike.
          </p>
          <p>
            The Errington War Memorial Hall today continues the tradition built
            up over the years as a cultural, social and recreational centre for
            the surrounding area. The Hall Association, a small group of
            dedicated volunteers, while constantly dealing with problems of
            keeping this aging facility alive and running, is committed to
            seeing that the Hall, the Old Fire Hall and the Community Park
            remain an asset to all local residents for years to come.
          </p>
          <p>
            The Association, known locally as "the Hall Board" meets in the Hall
            kitchen on the 3rd Monday of every month at 7:30 p.m. Needless to
            say, we are always looking for people who are willing to give a few
            hours of their time to help to "make things happen" in the
            community.
          </p>
          <p>
            For further information, call <strong>Lane</strong> at
            <PhoneNumber number="(250) 248-5724" /> or
            <strong>Denise Schmidt</strong> at
            <PhoneNumber number="(250) 248-5685" />
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PhoneNumber from "./snippets/PhoneNumber.vue";
export default {
  name: "History",
  components: {
    PhoneNumber
  },
  metaInfo() {
    return this.$route.meta;
  }
};
</script>
