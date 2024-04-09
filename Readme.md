
# AWS S3

Amazon Simple Storage Service (Amazon S3) is a scalable object storage service offered by Amazon Web Services (AWS). It allows users to store and retrieve any amount of data from anywhere on the web.

![Logo](https://tse3.mm.bing.net/th?id=OIP.wpfti_sRSXAyNs0ivZGtqQHaCj&pid=Api&P=0&h=180)


## How to create s3 Bucket

1.Search S3 in Aws console Account

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712634804/aws/s3/igdenowqeoyp4bdtefv3.png)

2.click on create bucket option

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712634910/aws/s3/etlpgv4xf0jewfsdchbn.png)


3.Give globally unique name of your bucket

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635034/aws/s3/y1mz2wuxtdl4cpai5n3q.png)


4.click on create Bucket Button

5.You Have Successfully created you bucket on AWS S3

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635172/aws/s3/norrjsvvpc16tsvkiqom.png)



#
# Create a user to grant access to a private S3 bucket

1.Search for IAM in Aws console Account

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635630/aws/s3/ciw17qhvyxhkzrp6tb5u.png)

2.click on Users in IAM dashboard

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635718/aws/s3/k2xlbqniul9fzejvf7k5.png)


3.click on create user

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635798/aws/s3/t7pmg4hfrj0wwsu4gej4.png)


4.enter user name and click on next

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635884/aws/s3/cilbdp1ortsrsqiizwzq.png)



5.Now set permissions to user

5.1 Select add user to group option

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636126/aws/s3/zbkxcn3cwgengbdm1806.png)

5.2 Click on create group

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636189/aws/s3/tk0wpj86um3ixqw4igqm.png)

5.3 Name the group and search for "AmazonS3FullAccess," then select it and click on Create user group

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636308/aws/s3/jhlnitj0xiqapi0xkeaz.png)


5.4 Now select User groups to s3fullaccess and click next

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636509/aws/s3/eeu0bttdtyuhxvbhisnv.png)

5.5 Now click on create user

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636591/aws/s3/gystogpufi1w2msdzmz2.png)

5.6 Now  User Successfully created with s3 permission

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636591/aws/s3/gystogpufi1w2msdzmz2.png)