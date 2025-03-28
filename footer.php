<?php
// Database connection settings (update with your Hostinger credentials)
$host = "localhost";  // Default for Hostinger
$user = "u563361941_sbei2005";  // Your Hostinger database username
$pass = "Sribalaji@2005";  // Your Hostinger database password
$dbname = "u563361941_college_db";  // Your database name

// Connect to MySQL database
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Retrieve the current view count
$result = $conn->query("SELECT view_count FROM view_counter WHERE id = 1");
$row = $result->fetch_assoc();
$views = $row['view_count'];

// Increment the count
$views++;

// Update the count in the database
$conn->query("UPDATE view_counter SET view_count = $views WHERE id = 1");

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Footer</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
</head>
<body>
    
    <footer>
        <div class="footer-container">
            <div class="footer-logo">  
                <h3>Sri Balaji Educational Institutions</h3>
                <p>Empowering Education for a Brighter Future</p>

                <div class="footer-social">
                    <h4>Follow Us</h4>
                    <a href="https://wa.link/8o0izx" title="Whatsapp" class="whatsapp" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
                    <a href="https://www.facebook.com/share/1A19Ya6TsZ/" title="Facebook" class="facebook" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/sri_balaji_edu_institution?utm_source=qr&igsh=Y21oa2FtZTRldmIw" title="Instagram" class="insta" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/nageswara-rao-kota-801526351?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BN7Nb2KbmTXuCeu7ZsxW50w%3D%3D" title="Linkedin" class="linkedin" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
                    <a href="https://youtube.com/@sribalajieducationinstitutions?si=wjpQa55LdL-_0EPm" title="Youtube" class="youtube" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube"></i></a>
                </div>

            </div>
    
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="facilities.html">Facilities</a></li>
                    <li><a href="placements.html">Training & Placements</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="apply.html">Apply Now</a></li>
                </ul>
            </div>
    
            <div class="footer-contact">
                <h4>Contact Us</h4>
                <p>LIC Colony, Pendurthi, Visakhapatnam- 531173</p>
                <div class="num"><a href="tel:9866707299"><p>📞9866707299</p><a href="tel:7661088177"><p>📞7661088177</p></a><a href="tel:9010237810"><p>📞9010237810</p></a></div>
                <a href="mailto:sribalajieducationinstitution@gmail.com"><p class="mail">📧sribalajieducationinstitution@gmail.com</p></a>
            </div>

            <div class="footer-map">
                <h4>We Are Here</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30386.312203241952!2d83.16403107431638!3d17.825081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3966d0cd0b5651%3A0x45eaff4d4b0cb346!2sSRI%20BALAJI%20EDUCATIONAL%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1740463837390!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
            </div>                                    
                                                       
        </div>                                        
                                                      
        <div class="footer-bottom">                   
            <p>© 2025 Sri Balaji Educational Institutions. All Rights Reserved. | Visitor Count: <strong><?php echo $views; ?></strong></p>
        </div>                                        
    </footer>                                         

</body>
</html>