<template>
  <footer class="border-light--accent footer">
    <div style="max-width: 1100px; margin: auto">
      <div class="footer__block--main">
        <nav class="mb-3">
          <div>Navigation:</div>
          <ul>
            <li><g-link :to="Router.home">Home</g-link></li>
            <li><g-link :to="Router.blog()">Blog</g-link></li>
            <li><g-link :to="Router.portfolio()">Portfolio</g-link></li>
            <li><g-link :to="Router.allResume()">Resume</g-link></li>
          </ul>
        </nav>

        <address>
          <div>Connect with me:</div>
          <a href="mailto:dorich2000@gmail.com">
            <v-icon>mdi-email</v-icon>
            <span style="color: #FFFFFF; text-decoration: underline">dorich2000@gmail.com</span>
          </a>
          <div>
						<v-btn icon target="_blank"
									 href="https://github.com/d0rich" >
							<v-icon>mdi-github</v-icon>
						</v-btn>
						<v-btn icon target="_blank"
									 href="https://twitter.com/D_orich" >
							<v-icon>fa-twitter</v-icon>
						</v-btn>
            <v-btn icon target="_blank"
                   href="https://t.me/d0rich" >
              <v-icon>fa-telegram</v-icon>
            </v-btn>
          </div>
        </address>
      </div>
      <div class="footer__block--bottom">
        <span>© {{new Date().getFullYear()}} Developer Nikolay Dorofeev (d0rich)</span>
      </div>
    </div>

  </footer>
</template>

<script>
import {Router} from "~/router";

export default {
name: "Footer",
  computed: {

  }
}
</script>

<style scoped>
.footer{
  margin-top: 150px;
  width: 100%;
  padding: 2em 1em;
  border-radius: 0;
  border-width: 2px 0 0 0;
  font-size: 0.9rem;
}
.footer__block--main{
  display: flex;
  justify-content: space-between;
}
.footer__block--bottom{
  display: flex;
  justify-content: space-between;
}

</style>
