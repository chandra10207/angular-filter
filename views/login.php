<section class="row gutter-0 login">
  <div class="container">
    <form name="myform" novalidate ng-submit="login()">
      <div class="textintro">
        <h1>Hi there!</h1>
        <p>Log-in to access the awesomeness!</p>
        <p class="message" ng-show="message">{{message}}</p>
      </div>

      <fieldset>
        <input type="email" name="email" placeholder="Email" ng-model="user.email" ng-required="true">
        <p ng-show="myform.email.$invalid && myform.email.$touched">must be valid value</p>
        <input type="password" name="password" placeholder="Password">
      </fieldset>

      <button type="submit" class="btn" ng-disabed="myform.$invalid">Login</button>
      <p>or <a ng-href="#/register">register</a></p>
    </form>
  </div>

</section>
