<div class="navbar-nav ml-auto action-buttons">
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4">Login</a>
                <div class="dropdown-menu action-form">
					<form action="/examples/actions/confirmation.php" method="post">
						<p class="hint-text">Sign in with your social media account</p>
						<div class="form-group social-btn clearfix">
							<a href="#" class="btn btn-secondary facebook-btn float-left"><i class="fa fa-facebook"></i> Facebook</a>
							<a href="#" class="btn btn-secondary twitter-btn float-right"><i class="fa fa-twitter"></i> Twitter</a>
						</div>
						<div class="or-seperator"><b>or</b></div>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Username" required="required">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" required="required">
						</div>
						<input type="submit" class="btn btn-primary btn-block" value="Login">
						<div class="text-center mt-2">
							<a href="#">Forgot Your password?</a>
						</div>
					</form>
                </div>
			</div>
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="btn btn-primary dropdown-toggle sign-up-btn">Sign up</a>
                <div class="dropdown-menu action-form">
					<form action="/examples/actions/confirmation.php" method="post">
						<p class="hint-text">Fill in this form to create your account!</p>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Username" required="required">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" required="required">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Confirm Password" required="required">
						</div>
						<div class="form-group">
							<label class="form-check-label"><input type="checkbox" required="required"> I accept the <a href="#">Terms &amp; Conditions</a></label>
						</div>
						<input type="submit" class="btn btn-primary btn-block" value="Sign up">
					</form>
				</div>
			</div>
        </div>
    </div>
</div>