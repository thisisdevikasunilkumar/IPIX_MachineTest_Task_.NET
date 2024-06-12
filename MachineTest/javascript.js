function strValidate(string)
{
  if(string!="")
  {
    var testName =/^([a-z]|[A-Z]| )*$/;
    if(!testName.test(string))
    {
      alert("Enter Alphabets only......" );
    }
    else
    {
      alerts(string);
    }
  }
}

function checkUsename(username)
{
  if(username!="")
  {
    if (username.length < 8)
    {
      alert("User name must have 8 character lengths");
    }
  }
}

function checkPassword(password)
{
  if(password!="")
  {
    if (password.length < 8)
    {
      alert("Password must have 8 character lengths");      
    }
  }
}

function validateForm() 
{
  var elements = ["firstname", "lastname", "username", "email", "phone", "password", "bio"];
  var formData = {};

  for (var i = 0; i < elements.length; i++) 
  {
    var elementId = elements[i];
    var value = document.getElementById(elementId).value.trim();

    if (value === "") 
    {
      alert("Please fill out all fields");
      return;
    }
    formData[elementId] = value;
  }
  showPopup(formData);
}

function showPopup(formData)
{
  var popupContent = "<h2 style='text-align: center; color: green;'>Form Data</h2>";
  for (var key in formData)
  {
    popupContent += "<p style='color: black;'><strong>" + key + ":</strong> " + formData[key] + "</p>";
  }
  popupContent += "<button onclick='closePopup()'>OK</button>";
  popupContent += "<button onclick='cancelPopup()'>Cancel</button>";

  var popup = document.getElementById("popup");
  popup.innerHTML = popupContent;
  popup.style.display = "block";
}

function closePopup() 
{
  alert("OK button clicked");
  document.getElementById("popup").style.display = "none";
}

function cancelPopup()
{
  alert("Cancel button clicked");
  document.getElementById("popup").style.display = "none";
}