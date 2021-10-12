<template>
  <div class="about">
    <Tabs>
      <Tab name="desc" selected="true">
        <div class="description">
          <p class="paragraph">
            Heey dear visitor, I am a Aymane Benhima, <br> an ambitious person who has developed a mature and responsible approach to any task I undertake, or situation that I am presented with. As a graduate with two years of experience in web development. I am excellent at working with others to achieve a certain objective on time and with excellence.
          </p>
          <a href="https://drive.google.com/file/d/1e29RB68K3UxZ0P1EGBZTPn9UkDdehp67/view?usp=sharing" target="_blank" rel="noopener" class="btn-text">See my resume &rarr;</a>
        </div>
        <div class="description mb-3">
          <p class="paragraph">
            I'm available for remote work, if you would like to build something together, <NuxtLink to="/contact">GET IN TOUCH ?</NuxtLink>
          </p>
        </div>
        <h3 class="heading-primary">Studies:</h3>
        <div class="description mb-3">
          <p class="about__title-primary">certification of full stack web development</p>
          <p class="about__title-secondary">Youcode - Youssoufia  |  2018 - 2020</p>
          <ul class="about__items">
            <li>Coursework in javascript, php/mysql and Java EE</li>
            <li>Coursework in Angular, Ionic and Spring boot</li>
          </ul>
        </div>
        <div class="description mb-3">
          <p class="about__title-primary">bachelor of modeling and environmental management</p>
          <p class="about__title-secondary">Higher school of technologies - Cadi ayad university  |  2017 - 2018</p>
          <ul class="about__items">
            <li>Member of Enactus.</li>
            <li>Thesis: Review of scientific studies on the Moroccan Atlantic coast.</li>
            <li>Coursework in Algorithms, R language and Modeling.</li>
          </ul>
        </div>
        <div class="description mb-3">
          <p class="about__title-primary">Technical degree - networking and computer systems</p>
          <p class="about__title-secondary">Advanced technician's certificate center - Essaouira |  2014 - 2016</p>
          <ul class="about__items">
            <li>Coursework in CISCO Network, Computer systems (Linux and Windows Server 2003) and C Language</li>
          </ul>
        </div>
      </Tab>
      <Tab name="exp">
        <Timeline />
      </Tab>
      <Tab name="skill">
        <h2 class="headline-primary">What I DO ?</h2>
        <div class="description mb-3">
          <p class="about__title-primary">Frontend dev</p>
          <p class="about__title-secondary">Creative Front-end Developer providing high-impact web solution for diverse projects. Skilled in designing developing and testing multiple web-based applications incorporating a range of technologies:</p>
          <ul class="about__items">
            <li> JavaScript es6+</li>
            <li> VueJS 2+ (VueX, Vue-router, CLI...)</li>
            <li> Vuetify</li>
            <li> Nuxt.js</li>
            <li> Angular 5+</li>
            <li> TypeScript</li>
            <li> jQuery</li>
            <li> ReactJS / Redux / Next.js</li>
            <li> Ionic Framework</li>
            <li> SASS</li>
            <li> Gsap / anime.js</li>
            <li> Webpack</li>
            <li> Bootstrap / Bulma / Tailwind Css</li>
          </ul>
        </div>
        <div class="description mb-3">
          <p class="about__title-primary">Backend dev</p>
          <p class="about__title-secondary">Motivated and highly productive Backend Developer. Detail-oriented with strong skills in multi-tasking and efficient management. Adept at building and maintaining effective working relationships with co-workers and clients through outstanding interpersonal skills.</p>
          <ul class="about__items">
            <li> Laravel Framework</li>
            <li> Node js Environment</li>
            <li> Express Framework</li>
            <li> PHP</li>
            <li> Wordpress / WooCommerce</li>
            <li> OAuth</li>
            <li> JWT Authentificaction</li>
            <li> MySQL / MongoDB</li>
            <li> Laravel ECOSYSTEM (October - Voyager)</li>
          </ul>
        </div>
        <div class="description mb-3">
          <p class="about__title-primary">Tools dev</p>
          <p class="about__title-secondary">&nbsp;</p>
          <ul class="about__items">
            <li> Git</li>
            <li> Docker</li>
            <li> Jenkins</li>
            <li> Unit test / E2E | Jest Karma.js</li>
            <li> SEO report</li>
            <li> Adobe XD / Figma</li>
            <li> Agile Methodology | Trello - Jira</li>
            <li> Server side rendering</li>
            <li> API Integration</li>
          </ul>
        </div>
        <BarChart :data="barChartData" :options="barChartOptions" class="radar-style" :height="250" />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import BarChart from "~/components/BarChart.vue";
export default {
  components: { BarChart },
  data() {
    return {
      barChartData: {
        labels: [
          'Frontend',
          'Backend',
          'UI/UX',
          'Devops',
          'Problem solving'
        ],
        datasets: [
          {
            label: [
              'skill'
            ],
            data: [80, 65, 70, 50, 75],
            backgroundColor: "rgba(238, 187, 195, 0.3)",
            borderColor: "rgba(238, 187, 195, 1)",
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
          labels: {
            fontColor: '#FFFFFE'
          }
        },
        title: {
          display: true,
          text: "Summary of my skills",
          fontSize: 20,
          fontColor: "#121629",
        },
        tooltips: {
          backgroundColor: "#eebbc3",
        },
            borderWidth: 10,
        scale: {
          ticks: {
            fontSize: 10,
            min: 20,
            max: 80
          },
          gridLines: {
            lineWidth: 1,
            color: "#121629"
          },
          pointLabels: {
            fontSize: 10,
            fontStyle: "bold",
            fontColor: '#fffffe'
          }
        },
        scales: {
          r: {
            grid: {
              color: 'red'
            },
            angleLines: {
              color: 'red'
            },
            suggestedMin: 50,
            suggestedMax: 100
          }
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
      }
    }
  },
}
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  font-size: $h1-font-size;

}

.radar-style {
  position: relative;
  margin: 0;
}
a {
  color: var(--container-color);
}
.description {
  padding: 2rem;
  flex: 1;
  text-align: justify;
  background: var(--bg-color-sec);
  font-size: $h3-font-size;
  border-radius: .4rem;
  box-shadow: 0.8em 0.8em 0 0 var(--stroke-color);
  border: 2px solid #000;
  margin-top: 1.5em;
}

.about__title-primary {
  text-transform: uppercase;
  font-weight: $font-bold;
  color: var(--container-color);
}

.about__title-secondary {
  font-weight: $font-thin;
  color: var(--title-color);
}

.about__items {
  margin-left: 2rem;
  color: var(--stroke-color);
  font-weight: $font-medium;
}
.chart {
  align-self: center;
  position: relative;
  width: 60%;
}
</style>
