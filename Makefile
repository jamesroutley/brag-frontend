

deploy:
	aws s3 cp --recursive dist/ s3://brag.create.cloudreach.com
