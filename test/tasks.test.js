const supertest = require('supertest');
const express = require('express');
const taskRoutes = require('../src/tasks/routes');
const app = express();
const FakeTaskService = require('./fake-task-service');

app.use(express.json());
app.use("/api/v2/tasks", FakeTaskService ,taskRoutes);

describe('task', () => {
  describe('get todos', () => {
    it('should succeed', async () => {
      const { body, statusCode } = await supertest(app).get('/api/v2/tasks/todo');

      expect(statusCode).toBe(200);
      expect(body).toBeTruthy();
      body.forEach(element => {
        expect(element.is_done).toBe(false);
      });
    })
  })

  describe('get finished tasks', () => {
    it('should succeed', async () => {
      const { body, statusCode } = await supertest(app).get('/api/v2/tasks/finished');

      expect(statusCode).toBe(200);
      expect(body).toBeTruthy();
      body.forEach(element => {
        expect(element.is_done).toBe(true);
      });
    })
  })

  describe('create task', () => {
    it('should succeed', async () => {
      const newTask = { task: 'New Task' };

      const { body, statusCode } = await supertest(app)
        .post('/api/v2/tasks')
        .send(newTask)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');

      body.forEach(element => {
        expect(statusCode).toBe(201);
        expect(element.id).toBeTruthy();
        expect(element.task).toEqual('New Task');
        expect(element.is_done).toBe(false);
        expect(element.created_at).toBeTruthy();
        expect(element.deleted_at).toBeNull();
      });
    })

    it('should fail when empty', async () => {
      const newTask = { task: '' };
  
  
      const { body, statusCode } = await supertest(app)
      .post('/api/v2/tasks')
      .send(newTask)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
      
      expect(statusCode).toBe(400);
    });
  });

  describe('update task', () => {
    it('should succeed', async () => {
      const is_done = { is_done: false };
      const { body, statusCode } = await supertest(app)
        .put(`/api/v2/tasks/${2}`)
        .send(is_done)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');

        expect(statusCode).toBe(200);
        body.forEach(element => {
          expect(statusCode).toBe(200);
          expect(element.id).toBeTruthy();
          expect(element.task).toEqual('New Task');
          expect(element.is_done).toBe(false);
          expect(element.created_at).toBeTruthy();
          expect(element.deleted_at).toBeNull();
          expect(element.finished_at).toBe(null);
        });
    })
  });

  describe('search tasks', () => {
    it('should return results', async () => {
      const { body, statusCode } = await supertest(app)
        .get('/api/v2/tasks/search/false/work');

      expect(statusCode).toBe(200);
      body.forEach(element => {
        expect(statusCode).toBe(200);
        expect(element.id).toBeTruthy();
        expect(element.task).toEqual('work');
        expect(element.is_done).toBe(false);
        expect(element.created_at).toBeTruthy();
        expect(element.deleted_at).toBeNull();
        expect(element.finished_at).toBe(null);
      });
    })
  });

  describe('delete all tasks', () => {
    it('should succeed', async () => {
      const { body, statusCode } = await supertest(app).delete('/api/v2/tasks');
      expect(statusCode).toBe(200);
    })
  });
})