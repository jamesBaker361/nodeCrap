echo 👽
echo $1
mkdir public/js/$1
subl public/js/$1/$1.module.js
subl public/js/$1/$1.controller.js
subl public/js/$1/$1.template.html

echo "angular.module(\"$1\", []);" >> public/js/$1/$1.module.js

echo "<script type=\"text/javascript\" src=\"js/$1/$1.controller.js\"></script>
        <script type=\"text/javascript\" src=\"js/$1/$1.module.js\"></script>"