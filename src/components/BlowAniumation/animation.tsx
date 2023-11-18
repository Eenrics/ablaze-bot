import { useEffect, useRef } from "react";
import Matter, {
  Body,
  Bodies,
  Engine,
  Events,
  Render,
  Runner,
  World,
} from "matter-js";

const BALLS_COUNT = 80;
const BALL_RADIUS = 9;
const CANVAS_WIDTH = 110;
const CANVAS_HEIGHT = 110;

const Animation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const engine = Engine.create();
    const runner = Runner.create();

    const canvas = canvasRef.current!;
    const render = Render.create({
      canvas,
      engine,
      options: {
        wireframes: false,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        background: "transparent",
      },
    });

    const balls: Body[] = [];
    const ballImagePaths: string[] = [
      "src/assets/balls/59.png",
      "src/assets/balls/7.png",
    ];

    const createBall = () => {
      const ball = Bodies.circle(
        render.canvas.width / 2 - BALL_RADIUS,
        render.canvas.height / 2 - 2 * BALL_RADIUS,
        BALL_RADIUS,
        {
          restitution: 0.9,
          render: {
            sprite: {
              xScale: 0.009,
              yScale: 0.007,
              texture:
                ballImagePaths[
                  Math.round(Math.random() * (ballImagePaths.length - 1))
                ],
            },
          },
        },
      );
      balls.push(ball);
      return ball;
    };

    const onRenderTick = () => {
      balls.forEach((ball) => {
        if (ball.position.y >= render.canvas.height - 100) {
          Body.applyForce(
            ball,
            { x: ball.position.x, y: ball.position.y },
            { x: 0.003, y: -0.003 },
          );
        }
        if (ball.position.y < 120) {
          Body.applyForce(
            ball,
            { x: ball.position.x, y: ball.position.y },
            { x: -0.003, y: 0.003 },
          );
        }

        if (ball.position.x < 80) {
          Body.applyForce(
            ball,
            { x: ball.position.x, y: ball.position.y },
            { x: 0.003, y: -0.003 },
          );
        }

        if (ball.position.x > render.canvas.width - 80) {
          Body.applyForce(
            ball,
            { x: ball.position.x, y: ball.position.y },
            { x: -0.003, y: 0.003 },
          );
        }
      });
    };

    // Add the balls to the scene
    for (let i = 0; i < BALLS_COUNT; i++) {
      World.add(engine.world, createBall());
    }

    // Run the engine
    Runner.run(runner, engine);
    Render.run(render);

    /**
     * Adds one or more bodies to the world.
     *
     * @param bodies - The bodies to be added.
     */
    const addBody = (...bodies: Body[]) => {
      World.add(engine.world, bodies);
    };

    const addRect = ({
      x = 0,
      y = 0,
      w = 10,
      h = 10,
      options = {},
    }: {
      x?: number;
      y?: number;
      w?: number;
      h?: number;
      options?: Matter.IBodyDefinition;
    } = {}) => {
      const body = Bodies.rectangle(x, y, w, h, options);
      addBody(body);
      return body;
    };

    const sW = CANVAS_WIDTH;
    const sH = CANVAS_WIDTH;
    const m = Math.min(sW, sH);
    const rat = (1 / 4.5) * 2;
    const r = m * rat;
    const pegCount = 64;
    const TAU = Math.PI * 2;
    for (let i = 0; i < pegCount; i++) {
      const segment = TAU / pegCount;
      const angle2 = (i / pegCount) * TAU + segment / 2;
      const x2 = Math.cos(angle2);
      const y2 = Math.sin(angle2);
      const cx2 = x2 * r + sW / 2;
      const cy2 = y2 * r + sH / 2;
      addRect({
        x: cx2,
        y: cy2,
        w: (50 / 1000) * m,
        h: (200 / 1000) * m,
        options: {
          angle: angle2,
          isStatic: true,
          density: 1,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 0,
          },
        },
      });
    }
    // Build the circle bounds - END

    // Start the blowing with X seconds delay
    setTimeout(() => {
      Events.on(runner, "tick", onRenderTick);
    }, 1000);

    // Cleanup when the component unmounts
    return () => {
      Runner.stop(runner);
      Render.stop(render);
      // World.clear(engine.world);
      Engine.clear(engine);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Animation;
