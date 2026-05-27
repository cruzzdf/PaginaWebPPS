FROM pytho

WORKDIR
COPY  test.war /app
WORKDIR /app    

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]




