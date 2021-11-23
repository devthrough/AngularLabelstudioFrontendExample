import { Component, OnInit } from '@angular/core';
// @ts-ignore
import LabelStudio from 'label-studio';

@Component({
  selector: 'app-labelstudio-component',
  templateUrl: './labelstudio-component.component.html',
  styleUrls: ['./labelstudio-component.component.css']
})
export class LabelstudioComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createLabelStudio();
  }

  createLabelStudio(){
    var labelStudio = new LabelStudio('label-studio', {
      config: `
      <View>
        <Image name="img" value="$image"></Image>
        <RectangleLabels name="tag" toName="img">
          <Label value="Hello"></Label>
          <Label value="World"></Label>
        </RectangleLabels>
      </View>
    `,

      interfaces: [
        "panel",
        "update",
        "submit",
        "controls",
        "side-column",
        "annotations:menu",
        "annotations:add-new",
        "annotations:delete",
        "predictions:menu",
      ],

      user: {
        pk: 1,
        firstName: "James",
        lastName: "Dean"
      },

      task: {
        annotations: [],
        predictions: [],
        id: 1,
        data: {
          image: "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg"
        }
      },

      onLabelStudioLoad: function(LS: { annotationStore: { addAnnotation: (arg0: { userGenerate: boolean; }) => any; selectAnnotation: (arg0: any) => void; }; }) {
        var c = LS.annotationStore.addAnnotation({
          userGenerate: true
        });
        LS.annotationStore.selectAnnotation(c.id);
      }
    });

    return labelStudio;
  }

}
