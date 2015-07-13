function createWebcomeviewButton() {
  var sessionId = /user_session=([^;]*)/.exec(document.cookie)[1];
  var liveId = location.pathname.split('/')[2];
  var winSize = 600;

  var a = document.createElement('a');
  a.href = 'javascript:void 0;';
  a.onclick = function () {
    window.open(
      'http://nicolive.berabou.me/#/' + liveId + '?sessionId=' + sessionId,
      '_blank',
      'width=' + winSize + ',height=' + winSize + ',state=no'
    );
  }
  a.target = liveId;

  var span = document.createElement('span');
  span.style.backgroundColor = '#106CC8';
  span.style.color = 'white';
  span.style.cursor = 'pointer';
  span.style.borderRight = 'none';
  span.style.padding = '2px';
  span.textContent = 'コメビュ';

  var siteHeaderGlovalNavigation = document.getElementsByClassName('siteHeaderGlovalNavigation')[0];
  var li = document.createElement('li');
  a.appendChild(span);
  li.appendChild(a);
  siteHeaderGlovalNavigation.appendChild(li);
}

var srcCode = createWebcomeviewButton.toString() + ';createWebcomeviewButton();';
var script = document.createElement('script');
script.textContent = srcCode;
document.documentElement.appendChild(script);