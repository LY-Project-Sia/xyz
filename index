<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #050505, #151515);
            color: white;
        }

        .login-container {
            width: 380px;
            padding: 40px;
            background: rgba(20, 20, 20, 0.95);
            border: 1px solid #333;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }

        /* LOGO */
        .logo {
            width: 90px;
            height: 90px;
            margin: 0 auto 20px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid #ff0000;
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.35);
            background: #111;
        }

        .logo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        h1 {
            text-align: center;
            margin-bottom: 8px;
            font-size: 28px;
        }

        .subtitle {
            text-align: center;
            color: #999;
            font-size: 14px;
            margin-bottom: 30px;
        }

        .input-group {
            margin-bottom: 20px;
        }

        .input-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: #ccc;
        }

        .input-group input {
            width: 100%;
            padding: 14px 15px;
            border-radius: 10px;
            border: 1px solid #333;
            background: #0d0d0d;
            color: white;
            outline: none;
            transition: 0.3s;
        }

        .input-group input:focus {
            border-color: #ff0000;
            box-shadow: 0 0 12px rgba(255, 0, 0, 0.2);
        }

        .options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 5px 0 25px;
            font-size: 13px;
        }

        .remember {
            display: flex;
            align-items: center;
            gap: 7px;
            color: #aaa;
        }

        .remember input {
            accent-color: red;
        }

        .forgot {
            color: #ff3333;
            text-decoration: none;
        }

        .forgot:hover {
            text-decoration: underline;
        }

        .login-btn {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(135deg, #ff0000, #b00000);
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
        }

        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 0, 0, 0.35);
        }

        .signup {
            text-align: center;
            margin-top: 25px;
            color: #888;
            font-size: 14px;
        }

        .signup a {
            color: #ff3333;
            text-decoration: none;
            font-weight: bold;
        }

        .signup a:hover {
            text-decoration: underline;
        }

        @media (max-width: 450px) {
            .login-container {
                width: 90%;
                padding: 30px 25px;
            }
        }
    </style>
</head>

<body>

    <div class="login-container">

        <!-- UPLOAD YOUR LOGO HERE -->
        <div class="logo">
            <img src="logo.png" alt="Logo">
        </div>

        <h1>Welcome Back</h1>
        <p class="subtitle">Sign in to continue to your account</p>

        <form>

            <div class="input-group">
                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                >
            </div>

            <div class="input-group">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    required
                >
            </div>

            <div class="options">

                <label class="remember">
                    <input type="checkbox">
                    Remember me
                </label>

                <a href="#" class="forgot">
                    Forgot Password?
                </a>

            </div>

            <button type="submit" class="login-btn">
                Login
            </button>

        </form>

        <div class="signup">
            Don't have an account?
            <a href="#">Create Account</a>
        </div>

    </div>

</body>
</html>
