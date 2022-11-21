// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OyXe5VZMweUqav7eqSXpiXj5UADadedr


const articles3 = `<div class="row gy-5">
<div class="col-12">
  <div class="row">
    <div class="col-9">
      <div class="h-25 row">
        <div class="col-8">
          <img src="./assets/avatar_default.png" alt="..." />
          <b>Author name</b> <small class="text-muted">in</small>
            <b>Topics name</b> <small class="text-muted">7 July</small>
      </div>
        <div class="col-2">
            <p></p>
        </div>
          <div class="col2">
        </div>
      </div>
      <div class="h-25 row"><h1 id="title">7 Practical CSS Tips</h1></div>
      <div class="h-25 row">
        <p>
          You not only learn more Python by implementing what you
          already know but, in the end, you can see how all your hard
          work pays off.
        </p>
      </div>
      <div class="h-25 row">
        <div class="col-2" id = "but1">
                    <button type="button" class="btn btn-secondary" disabled>JavaScript</button>

        </div>
        <div class="col-8">
          <p>
            <small class="text-muted">12 min read</small>
            <small class="text-muted">.</small>
            <small class="text-muted">Selected for you</small>
          </p>
        </div>
        <div class="col-2">
          <img src="./assets/skeleton-rect.png" alt="..." />
          <img src="./assets/skeleton-rect.png" alt="..." />
          <img src="./assets/skeleton-rect.png" alt="..." />
        </div>
      </div>
    </div>
    <div class="col">
      <img src="./assets/thread1.png" class="img-fluid" alt="..." />
    </div>
    </div>
      <p class="text-muted">  </p>
    <div class="d-grid gap-5"></div>
  <hr>
</div>
</div>
<div class="row gy-5">
<div class="col-12">
  <div class="row">
    <div class="col-9">
      <div class="h-25 row">
        <div class="col-8">
          <img src="./assets/avatar_default.png" alt="..." />
            <b>Author name</b> <small class="text-muted">in</small>
            <b>Topics name</b> <small class="text-muted">7 July</small>
        </div>
        <div class="col2">
         <p>      </p>
        </div>
      </div>
      <div class="h-25 row"><h1 id="title-2">7 Practical CSS Tips</h1></div>
      <div class="h-20 row">
        <p>
          Recently, I’ve been automating tasks more than often due to my lack of time. 
          Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
          You’ll find links to the full scripts and tutorials to solve each project. Also, 
          I’m leaving a challenge to each of them to test your Python skills.
          To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...  
        </p>
      </div>
      <div class="h-25 row">
        <div class="col-2" id="but2">
          <button type="button" class="btn btn-secondary" disabled>JavaScript</button>
        </div>
        <div class="col-8">
          <p>
            <small class="text-muted">12 min read</small>
            <small class="text-muted">.      </small>
            <small class="text-muted">Selected for you</small>
          </p>
        </div>
        <div class="col-2">
          <img src="./assets/skeleton-rect.png" alt="..." />
          <img src="./assets/skeleton-rect.png" alt="..." />
          <img src="./assets/skeleton-rect.png" alt="..." />
        </div>
      </div>
    </div>
    <div class="col">
      <img src="./assets/thread2.png" class="img-fluid" alt="..." />
    </div>
  </div>
    <p class="text-muted">  .</p>
  <div class="d-grid gap-5"></div>
  <hr />
</div>
</div>
<div class="row gy-5">
<div class="col-12">
  <div class="row">
    <div class="col-9">
      <div class="h-25 row">
        <div class="col-8">
          <img src="./assets/avatar_default.png" alt="..." />
            <b>Author name</b> <small class="text-muted">in</small>
            <b>Topics name</b> <small class="text-muted">7 July</small>
        </div>
        <div class="col-8">
          <p>      </p>
        </div>
      </div>
      <div class="h-25 row"><h1 id="title">7 Practical CSS Tips</h1></div>
      <div class="h-20 row">
        <p>
          Recently, I’ve been automating tasks more than often due to my lack of time. 
          Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
          You’ll find links to the full scripts and tutorials to solve each project. 
          Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, 
          I already created a template for a cover letter. Here’s how the template we’ll use looks...
        </p>
      </div>

      <div class="h-25 row">
        <div class="col-2">
                    <button type="button" class="btn btn-secondary" disabled>JavaScript</button>
        </div>
        <div class="col-8">
          <p>
            <small class="p-3  text-muted">12 min read</small>
                        <small class="text-muted">.</small>
            <small class="text-muted">Selected for you</small>
          </p>
        </div>
        <div class="col-2">
          <img src="./assets/skeleton-rect.png" alt="..." />
          <img src="./assets/skeleton-rect.png" alt="..." />
          <img src="./assets/skeleton-rect.png" alt="..." />
        </div>
      </div>
    </div>
    <div class="col">
      <img src="./assets/thread3.png" class="img-fluid" alt="..." />
    </div>
  </div>
  <p class="text-muted">  .</p>
  <div class="d-grid gap-5"></div>
  <hr />
</div>
</div>`;

  //GET
fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OyXe5VZMweUqav7eqSXpiXj5UADadedr")
  .then((response => console.log(response)))
  .then((res) => {
    const container = document.getElementById("container");
    container.innerHTML += articles3;
  });

function loadArticles() {
  const container = document.getElementById("container");
  // const container2 = document.getElementById("container-2");

  let fetchedArticles = "";

  async function getNews() {
    const result = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OyXe5VZMweUqav7eqSXpiXj5UADadedr"
    );

    const result2 = await result.json();

    if (!results2.data || results2.data.length === 0) {
      return emptyData();
    }

    const res = result2.results;
    fetchedArticles = result2.results;
    res.forEach((element) => {
      const newTitle = article.replace(
        `id="title">`,
        `id="title">${element.title}`
      );

      const abstract =
        element.abstract.length > 200
          ? element.abstract.slice(0, 200) + " ..."
          : element.abstract;

      const newDescription = newTitle.replace(
        `id="description">`,
        `id="title">${abstract}`
      );

      const imageNews =
        element.multimedia && element.multimedia.length > 0
          ? element.multimedia[0].url
          : "";

      const newImage = newDescription.replace(
        `className="news-image"`,
        `className="news-image" src="${imageNews}"`
      );
      container.innerHTML += newImage;

      handleClickOnTitle();
    });
  }

  getNews();

  function handleClickOnTitle() {
    const titles = document.querySelectorAll(".title");
    const buttons = document.querySelectorAll(".go-back");

    let dataForNewPage = "";

    titles.forEach((title) => {
      title.addEventListener("click", () => {
        dataForNewPage = fetchedArticles.filter(
          (article) => article.title === title.innerHTML
        )[0];
        container.className = "remove";
        container2.className = "show";

        const newTitle = document.querySelector(".title-2");

        if (newTitle.innerHTML) {
          newTitle.innerHTML = "";
        }
        newTitle.append(dataForNewPage.title);
      });
    });

    buttons.forEach((el) => {
      el.addEventListener("click", () => {
        container.className = "show";
        container2.style.display = "none";
      });
    });
  }
}



