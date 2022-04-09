let firstPageData = [];
let content;
// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     let parsedData = data.forEach((item) => {
//       item.caption;
//     });
//     console.log(parsedData).catch((error) => {
//       throw new Error(error.message);
//     });
//   });
//  Keep getting this Error in all scenarios I've tried to fetch data : "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https".

document.addEventListener("DOMContentLoaded", function () {
  content = document.getElementById("content");
  for (let i = 0; i < 4; i++) {
    firstPageData.push(data[i]);
  }

  LoadData(firstPageData);
});

function LoadData(data1) {
  data1.forEach((element) => {
    let date = formatDate(element.date);
    let trimmed;
    let logo;
    if (element.caption.length > 200) {
      trimmed = element.caption.substring(0, 200).trimEnd() + "...See More";
    } else {
      trimmed = element.caption;
    }
    if (element.source_type == "instagram") {
      logo = "instagram-logo";
    } else {
      logo = element.source_type;
    }
    let div = document.createElement("div");
    div.setAttribute("class", "card-container");
    div.innerHTML =
      `
        <div class="social-card">
        <div class="card-header">
            <div class="card-header-user">
                <div class="user-img">
                    <img src="` +
      element.profile_image +
      `">
                </div>
                <div class="user-info">
                    <p class="user-name"><strong>` +
      element.name +
      `</strong></p>
                    <span class="img-date">` +
      date +
      `</span>
                </div>
            </div>
            <div class="social-logo">
                <img height="25px" src="` +
      logo +
      `.svg" />
            </div>
        </div>
        <div class="card-image">
            <img src="` +
      element.image +
      `">
        </div>
        <div class="card-caption">
            <span>` +
      trimmed +
      `</span>
        </div>
        <div class="card-footer">
            <div id=` +
      element.likes +
      ` class="like" style="cursor: pointer"><img style="pointer-events: none" src="heart.svg"/></div>
            <span class =` +
      element.likes +
      ` style="margin-left: 5px">` +
      element.likes +
      `</span>
        </div>
    </div>
        `;
    content.appendChild(div);
  });
}

function LoadMoreData() {
  let data1 = [];
  last = firstPageData.length + 4;
  console.log(`${last} ${data.length}`);
  if (last >= data.length) {
    let btn = document.getElementById("btn");
    btn.style.display = "none";
  } else {
    for (let i = firstPageData.length; i < last; i++) {
      data1.push(data[i]);
      firstPageData.push(data[i]);
    }
    console.log(firstPageData);
    LoadData(data1);
  }
}

document.addEventListener(
  "click",
  function (event) {
    if (!event.target.matches(".like")) return;

    event.preventDefault();

    let like = event.target;
    like.classList.toggle("liked");
    console.log(event.target.id);
    let count = document.getElementById(event.target.id);
    let elemSibling = count.nextElementSibling;
    console.log(elemSibling);
    let number2 = elemSibling.classList[0];
    console.log(number2);
    let number = Number(number2);
    console.log(number);
    if (like.classList.contains("liked")) {
      number += 1;
      elemSibling.classList.remove(number2);
      elemSibling.classList.add(number);
    } else {
      number -= 1;
      elemSibling.classList.remove(number2);
      elemSibling.classList.add(number);
    }

    elemSibling.innerHTML = number.toString();
    console.log(elemSibling);
    elemSibling = null;
  },
  false
);

var formatDate = function (timestamp) {
  let date = new Date(timestamp);

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
  );
};

let data = [
  {
    image: "https://placekitten.com/600/400",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2018-03-12 03:00:00",
    likes: "123",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/100",
  },
  {
    image: "https://placekitten.com/600/410",
    caption:
      "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
    type: "image",
    source_type: "instagram",
    source_link: "https://instagram.com/embedsocial/",
    date: "2019-01-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/100",
  },
  {
    image: "https://placekitten.com/600/420",
    caption: "",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-01-21 03:00:00",
    likes: "9866555",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/150",
  },
  {
    image: "https://placekitten.com/600/430",
    caption:
      "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/120/120",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2018-04-12 03:00:00",
    likes: "12343",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/50/50",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "123",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/101/101",
  },
  {
    image: "https://placekitten.com/800/400",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "12",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/120",
  },
  {
    image: "https://placekitten.com/600/500",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-12-12 03:00:00",
    likes: "23",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/140/140",
  },
  {
    image: "https://placekitten.com/700/400",
    caption:
      "Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2017-12-08 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/100",
  },
  {
    image: "https://placekitten.com/700/500",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-02-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/102/102",
  },
  {
    image: "https://placekitten.com/800/600",
    caption:
      "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/103/100",
  },
  {
    image: "https://placekitten.com/700/600",
    caption: "Duis in facilisis lectus.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2020-12-12 03:00:00",
    likes: "1",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/40/100",
  },
  {
    image: "https://placekitten.com/1600/1400",
    caption:
      "Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-15 03:00:00",
    likes: "2324",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/80/100",
  },
  {
    image: "https://placekitten.com/1600/400",
    caption:
      "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-10-12 03:00:00",
    likes: "1223",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/80/80",
  },
  {
    image: "https://placekitten.com/2000/4000",
    caption:
      "Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2016-12-12 03:00:00",
    likes: "12223",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/110/110",
  },
  {
    image: "https://placekitten.com/900/600",
    caption:
      " Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2017-12-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/110/100",
  },
  {
    image: "https://placekitten.com/600/410",
    caption:
      "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
    type: "image",
    source_type: "instagram",
    source_link: "https://instagram.com/embedsocial/",
    date: "2019-01-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/100",
  },
  {
    image: "https://placekitten.com/600/420",
    caption: "",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-01-21 03:00:00",
    likes: "9866555",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/150",
  },
  {
    image: "https://placekitten.com/600/430",
    caption:
      "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/120/120",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2018-04-12 03:00:00",
    likes: "12343",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/50/50",
  },
];
