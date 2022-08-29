function Demo1() {
  var current_time = new Date();
  var localTime = current_time.toLocaleTimeString();
  var current_hour = current_time.getHours();
  if (current_hour >= 1 && current_hour < 11) {
    var cssStyle = {
      color: "#234234",
    };
    var text = "Good Morning";
  } else if (current_hour >= 11 && current_hour < 16) {
    var cssStyle = {
      color: "#124124",
    };
    var text = "Good Afternoon";
  } else if (current_hour >= 16 && current_hour <= 19) {
    var cssStyle = {
      color: "#124124",
    };
    var text = "Good Evening";
    var de = '😄';
  } else {
    var cssStyle = {
      color: "#234211",
    };
    var text = "Good Night";
  }
  return (
    <>
      <span>Hello Sir,</span>
      <span style={cssStyle}>{text}</span>
      <p>Current time is {localTime}</p>
    </>
  );
}

export default Demo1;
